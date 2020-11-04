import localforage from "localforage";
import { getProfile } from "./profile";

let addressList = null;

export const defaultAddress = {
  address: "",
  city: "",
  zipcode: "",
};

async function getAddressList() {
  if (addressList !== null) {
    return addressList;
  }

  addressList = [];
  try {
    const al = await localforage.getItem("address_list");
    if (al !== null) {
      addressList.push(...al);
    }
  } catch (e) {
    console.error(e);
  }

  return addressList;
}

export async function getPreferredAddresses(profile) {
  const list = [...profile.addressList];
  list.push(...(await getAddressList()));

  return list;
}

export async function getDefaultAddress() {
  const profile = await getProfile();
  if (profile.addressList.length) {
    // Préférer une vraie adresse si disponible
    return profile.addressList[0];
  }

  const al = await getAddressList();
  if (al.length) {
    // Sinon une adresse déjà utilisée
    return al[0];
  }

  // Pas encore d'adresse
  return null;
}

export async function addAddress(address) {
  addressList.push(address);
  try {
    return localforage.setItem("address_list", addressList);
  } catch (e) {
    console.error(e);
  }
}

export async function clear() {
  addressList = [];
  try {
    return localforage.removeItem("address_list");
  } catch (e) {
    console.error(e);
  }
}

export function isFilled(address) {
  return (
    address.address !== "" || address.city !== "" || address.zipcode !== ""
  );
}
