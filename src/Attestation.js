import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import findAddress from "./findAddress";
import { getHeure, getDateMoins15mn } from "./dateSortie";
import pdfBase from "./attestation-deplacement-derogatoire-q4-2020/certificate.pdf";
import { generatePdf } from "./attestation-deplacement-derogatoire-q4-2020/pdf-util";
import { defaultProfile, getProfile } from "./profile";
import "./attestation.css";
import useInterval from "./useInterval";

const pdfjsURL = "pdfjs-2.5.207-dist/web/viewer.html";

export default function Attestation() {
  const history = useHistory();
  const [profile, setProfile] = useState(null);
  const [address, setAddress] = useState(null);
  const [dateSortie, setDateSortie] = useState(getDateMoins15mn());
  const [pdf, setPdf] = useState("about:blank");

  // Initialiser les données
  useEffect(() => {
    (async () => {
      const p = await getProfile();
      if (p === defaultProfile) {
        // Formulaire pas encore complété
        history.push("/presentation");
        return;
      }

      setProfile(p);
      setAddress(p.addressList[0]);
      if (!p.heureAuto) setDateSortie(p.objetDate);
    })();
  }, [history]);

  // Vérifier l'heure toutes les 10mn
  useInterval(
    () => {
      if (new Date().getTime() >= dateSortie.getTime() + 40 * 60 * 1000) {
        const nouvelleDateSortie = getDateMoins15mn();
        console.debug(
          "mise à jour de la date de sortie %o",
          nouvelleDateSortie
        );
        setDateSortie(nouvelleDateSortie);
      }
    },
    // On vérifie toutes les secondes car les timers sont mis en pause quand la page n'est pas active
    profile && profile.heureAuto ? 1000 : null
  );

  // Régénérer le PDF dès qu'une donnée change
  useEffect(() => {
    if (!profile || !dateSortie || !address) return;

    (async () => {
      const blob = await generatePdf(
        {
          ...profile,
          address: address.address,
          zipcode: address.zipcode,
          city: address.city,
          objetDate: dateSortie,
          datesortie: dateSortie.toLocaleDateString("fr-fr"),
          heuresortie: getHeure(dateSortie),
        },
        profile.reason.join(", "),
        pdfBase
      );
      setPdf(`${pdfjsURL}?file=${URL.createObjectURL(blob)}#page=1`);
    })();
  }, [profile, address, dateSortie]);

  useEffect(() => {
    if (!profile) return;

    console.debug("commencer a surveiller la position");
    // On géolocalise en permanence, et on affiche une adresse valide en fonction de la position
    const id = navigator.geolocation.watchPosition(
      async (pos) => {
        setAddress(await findAddress(pos));
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, [profile]);

  return (
    <div className="App">
      <iframe
        id="pdf"
        title="pdf"
        style={{ width: "100%", height: "100%" }}
        src={pdf}
      ></iframe>

      <Link to="/form" className="btn btn-link btn-sm">
        Réglages
      </Link>
    </div>
  );
}
