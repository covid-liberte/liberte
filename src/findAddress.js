import haversine from "haversine";
import { getProfile } from "./profile";
import { getPreferredAddresses, addAddress } from "./addressList";

const findAddress = async (pos) => {
  const profile = await getProfile();
  //console.group("Trouver une adresse");

  let addressList;
  if (profile.adresseAuto) {
    addressList = await getPreferredAddresses(profile)
  } else {
    addressList = profile.addressList;
  } 
  //console.debug("Liste des addresses", addressList);

  //console.debug("Position %o", pos);

  for (const address of addressList) {
    // On prend 100 mètres de marge, car on connaît la flexibilité légendaire de la police française
    if (address.latitude && address.longitude && haversine(address, pos.coords, { threshold: 900, unit: "meter" })) {
      //console.debug("Réutilisation de l'adresse %o", address);
      //console.groupEnd();
      return address;
    }
  }

  if (!profile.adresseAuto && addressList.length) {
    return addressList[0];
  }

  const resp = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
  );
  const json = await resp.json();

  const address = {
    address: "",
    zipcode: json.address.postcode || "",
    city: json.address.city || "",
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude,
  };

  //console.debug("Création d'une nouvelle adresse %o", json);
  //console.groupEnd();

  if (!json.address.house_number && json.address.building)
    // On ne fait pas apparaître le nom du bâtiment si le numéro de la rue est disponible
    address.address = `${json.address.building} `;

  const composantsRue = [];
  if (json.address.house_number) composantsRue.push(json.address.house_number);
  if (json.address.road) composantsRue.push(json.address.road);

  if (composantsRue.length) address.address += composantsRue.join(" ");

  addAddress(address);

  return address;
};

export default findAddress;
