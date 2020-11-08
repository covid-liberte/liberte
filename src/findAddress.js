import haversine from "haversine";
import { getProfile } from "./profile";
import { getPreferredAddresses, addAddress } from "./addressList";

const findAddress = async (pos) => {
  const profile = await getProfile();
  //console.group("Trouver une adresse");

  let addressList;
  if (profile.adresseAuto) {
    addressList = await getPreferredAddresses(profile);
  } else {
    addressList = profile.addressList;
  }
  //console.debug("Liste des addresses", addressList);

  //console.debug("Position %o", pos);

  let adressePlusProche = null;
  let distanceAdressePlusProche = null;
  for (const address of addressList) {
    // Adresse non-géocodée
    if (!address.latitude || !address.longitude) continue;

    const distance = haversine(address, pos.coords, { unit: "meter" });
    // On prend 100 mètres de marge, car on connaît la flexibilité légendaire de la police française
    if (distance <= 900) {
      //console.debug("Réutilisation de l'adresse %o", address);
      //console.groupEnd();
      return address;
    }

    if (adressePlusProche === null || distance < distanceAdressePlusProche) {
      adressePlusProche = address;
      distanceAdressePlusProche = distance;
    }
  }

  if (!profile.adresseAuto && adressePlusProche) return adressePlusProche;

  const url = new URL(process.env.REACT_APP_OVERPASS_API);
  url.searchParams.append(
    "data",
    `[out:json];
  node(around:900,50.622318196221,3.0441414536924)["addr:housenumber"]["addr:street"]["addr:city"]["addr:postcode"];
  out 5;`
  );

  try {
    const resp = await fetch(url);
    const json = await resp.json();

    // Pas d'adresse à moins de 900m à la ronde... on prend l'adresse existante la plus proche en espérant que le flic (ou plus probablement le gendarme dans le cas présent) soit compréhensif.
    if (!json.elements.length) return adressePlusProche;

    // On prend une adresse sur les 5 au hasard, pour que ce ne soit pas toujours les mêmes adresses qui sortent
    const element =
      json.elements[Math.floor(Math.random() * json.elements.length)];

    const address = {
      address: `${element.tags["addr:housenumber"]} ${element.tags["addr:street"]}`,
      zipcode: element.tags["addr:postcode"],
      city: element.tags["addr:city"],
      latitude: element.lat,
      longitude: element.lon,
    };

    //console.debug("Création d'une nouvelle adresse %o", address);
    //console.groupEnd();

    addAddress(address);

    return address;
  } catch (e) {
    // En cas de problème (ex : API en rade), on renvoie l'adresse en stock la plus proche
    console.error(e);

    return adressePlusProche;
  }
};

export default findAddress;
