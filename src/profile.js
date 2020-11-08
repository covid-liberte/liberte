import localforage from "localforage";
import { getDatePlus5mn, getHtmlDate, getHeure } from "./dateSortie";

let profile = null;

export const defaultProfile = {
  heureAuto: true,
  adresseAuto: true,
  firstname: "",
  lastname: "",
  birthday: "",
  placeofbirth: "",
  datesortie: "",
  heuresortie: "",
  reason: ["sport_animaux"],
  addressList: [],
};

export async function getProfile() {
  if (profile !== null) {
    return profile;
  }

  try {
    profile = await localforage.getItem("profile");
    if (profile === null) {
      profile = defaultProfile;
    }
  } catch (e) {
    console.error(e);
  }

  return profile;
}

export async function updateProfile(newProfile) {
  profile = newProfile;
  try {
    return localforage.setItem("profile", newProfile);
  } catch (e) {
    console.error(e);
  }
}

/**
 * Pour prévenir les effets de bords liés au formulaire
 */
export function cloneProfile(profile) {
  const clonedProfile = { ...profile };

  clonedProfile.addressList = [...clonedProfile.addressList];
  clonedProfile.objetDate = getDatePlus5mn();
  clonedProfile.datesortie = getHtmlDate(clonedProfile.objetDate);
  clonedProfile.heuresortie = getHeure(clonedProfile.objetDate);

  return clonedProfile;
}

export async function clearProfile() {
  profile = null;
  try {
    return localforage.removeItem("profile");
  } catch (e) {
    console.error(e);
  }
}
