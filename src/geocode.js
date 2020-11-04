export default async function geocode(address) {
  const url = new URL(
    "https://nominatim.openstreetmap.org/search?format=jsonv2"
  );
  url.searchParams.set("street", address.address);
  url.searchParams.set("city", address.city);
  url.searchParams.set("postalcode", address.zipcode);
  url.searchParams.set("country", "France");

  const resp = await fetch(url);
  const json = await resp.json();

  if (json && json.length) {
      return {latitude: json[0].lat, longitude: json[0].lon};
  }

  return null;
}
