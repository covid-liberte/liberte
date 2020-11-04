import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import findAddress from "./findAddress";
import { generateDateSortie, getHeure } from "./dateSortie";
import pdfBase from "./attestation-deplacement-derogatoire-q4-2020/certificate.pdf";
import { generatePdf } from "./attestation-deplacement-derogatoire-q4-2020/pdf-util";
import { getDefaultAddress } from "./addressList";
import { getProfile } from "./profile";
import "./attestation.css";

const pdfjsURL = "pdfjs-2.5.207-dist/web/viewer.html";

export default function Attestation() {
  const [profile, setProfile] = useState(null);
  const [address, setAddress] = useState(null);
  const [dateSortie, setDateSortie] = useState(generateDateSortie());
  const [pdf, setPdf] = useState(null);

  // Régénérer le PDF dès qu'une donnée change
  useEffect(() => {
    (async () => {
      // Afficher les données par défaut en attendant la géolocalisation
      if (profile === null) {
        const p = await getProfile();
        setProfile(p);
        if (!p.heureAuto) {
          setDateSortie(p.objetDate);
        }
        return;
      }

      if (address === null) {
        const defaultAddress = await getDefaultAddress();
        if (defaultAddress !== null) {
          setAddress(defaultAddress);
        }

        return;
      }

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
    // On géolocalise en permanence, et on affiche une adresse valide en fonction de la position
    const id = navigator.geolocation.watchPosition(
      async (pos) => {
        setAddress(await findAddress(pos));
      },
      (error) => console.error(error),
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, []);

  // On met à jour l'heure de sortie quand nécessaire
  useEffect(() => {
    if (!profile || !profile.heureAuto) return;

    const timer = setTimeout(() => {
      setDateSortie(generateDateSortie());
    }, 15 * 60 * 1000); // Rafraîchir la date toutes les 15 minutes
    return () => clearTimeout(timer);
  }, [profile]);

  return (
    <div className="App">
      {pdf && address && (
        <iframe
          id="pdf"
          title="pdf"
          style={{ width: "100%", height: "100%" }}
          src={pdf}
        ></iframe>
      )}

      <Link to="/form" className="btn btn-link btn-sm">
        Réglages
      </Link>
    </div>
  );
}
