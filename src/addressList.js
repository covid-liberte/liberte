import localforage from "localforage";

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

export async function addAddress(address) {
  addressList.push(address);
  try {
    return localforage.setItem("address_list", addressList);
  } catch (e) {
    console.error(e);
  }
}

export async function clearAddressList() {
  addressList = null;
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
