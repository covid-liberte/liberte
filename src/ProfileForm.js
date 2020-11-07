import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import localforage from "localforage";
import formData from "./attestation-deplacement-derogatoire-q4-2020/form-data.json";
import {
  defaultProfile,
  getProfile,
  cloneProfile,
  updateProfile,
} from "./profile";
import { defaultAddress, isFilled, clear } from "./addressList";
import geocode from "./geocode";

const fieldList = formData.flat();
const fields = fieldList.filter((field) => field.key in defaultProfile);
const addressFields = fieldList.filter((field) => field.key in defaultAddress);

export default function ProfileForm() {
  const [profile, setProfile] = useState(null);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      // Afficher les données par défaut en attendant la géolocalisation
      if (profile === null) {
        setProfile(cloneProfile(await getProfile()));
        return;
      }
    })();
  });

  if (!profile) return <></>;

  if (
    !profile.addressList.length ||
    isFilled(profile.addressList[profile.addressList.length - 1])
  ) {
    profile.addressList.push({ ...defaultAddress });
  }

  return (
    <div className="container">
      <h1>Réglages</h1>
      <Formik
        initialValues={profile}
        validate={(values) => {}}
        onSubmit={async (values, { setSubmitting }) => {
          // Supprimer les adresses vides
          values.addressList = values.addressList.filter(isFilled);

          await Promise.all(
            values.addressList.map(async (address) => {
              if (address.latitude && address.longitude) return;
              const geo = await geocode(address);
              if (geo) {
                address.latitude = parseFloat(geo.latitude);
                address.longitude = parseFloat(geo.longitude);
              }
            })
          );

          profile.objetDate.setTime(
            Date.parse(`${profile.datesortie}T${profile.heuresortie}`)
          );
          profile.datesortie = profile.objetDate.toLocaleDateString("fr-fr");

          await updateProfile(values);
          history.push("/");
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div className="form-group" key="heureAuto">
              <div>
                Options magiques <i className="fas fa-hat-wizard"></i> (
                <a
                  href="https://twitter.com/Maitre_Eolas/status/1240175955244724225"
                  target="_blank"
                  rel="noreferrer"
                >
                  potentiellement illégal
                </a>
                )
              </div>
              <div className="form-check">
                <Field
                  id="heureAuto"
                  name="heureAuto"
                  type="checkbox"
                  className="form-check-input"
                />

                <label htmlFor="heureAuto" className="form-check-label">
                  Toujours afficher une date de sortie d'il y'a moins d'une
                  heure
                </label>

                <ErrorMessage name="heureAuto" component="div" />
              </div>

              <div className="form-check">
                <Field
                  id="adresseAuto"
                  name="adresseAuto"
                  type="checkbox"
                  className="form-check-input"
                />
                <label htmlFor="adresseAuto" className="form-check-label">
                  Toujours utiliser une adresse à moins d'1km du lieu actuel
                </label>

                <ErrorMessage name="adresseAuto" component="div" />
              </div>
            </div>

            {fields.map((field) => {
              if (field.type === "list") {
                return (
                  <div className="form-group" key={field.key}>
                    <div>Raisons</div>
                    {field.items.map((item) => {
                      const id = `${field.key}-${item.code}`;
                      return (
                        <div className="form-check" key={id}>
                          <Field
                            id={id}
                            name={field.key}
                            type="checkbox"
                            value={item.code}
                            className="form-check-input"
                          />{" "}
                          <label htmlFor={id} className="form-check-label">
                            {item.label.replace(
                              /<a class="footnote" href="#footnote.*">\[.*\]<\/a>/,
                              ""
                            )}
                          </label>
                        </div>
                      );
                    })}

                    <ErrorMessage name={field.key} component="div" />
                  </div>
                );
              }
              return (
                <div className="form-group" key={field.key}>
                  <label htmlFor={field.key}>{field.label}</label>
                  <Field
                    id={field.key}
                    name={field.key}
                    type={field.type}
                    autoComplete={field.autocomplete}
                    placeholder={field.placeholder}
                    pattern={field.pattern}
                    className="form-control"
                    required
                  />

                  <ErrorMessage name={field.key} component="div" />
                </div>
              );
            })}

            <div className="form-group">
              {values.addressList.map((address, index) => (
                <fieldset key={`addressList-${index}`}>
                  <legend>
                    {index + 1 === values.addressList.length
                      ? "Ajouter une adresse (laissez vide pour ignorer)"
                      : `Adresse ${index + 1}`}
                  </legend>

                  {addressFields.map((field) => (
                    <div
                      className="from-group"
                      key={`addressList-${index}-${field.key}`}
                    >
                      <label htmlFor={`addressList-${index}-${field.key}`}>
                        {field.label}
                      </label>
                      <Field
                        id={`addressList-${index}-${field.key}`}
                        name={`addressList[${index}].${field.key}`}
                        type={field.type}
                        autoComplete={field.autocomplete}
                        placeholder={field.placeholder}
                        pattern={field.pattern}
                        className="form-control"
                        required={index === 0}
                      />

                      <ErrorMessage
                        name={`addressList[${index}].${field.key}`}
                        component="div"
                      />
                    </div>
                  ))}

                  {address.latitude && (
                    <div
                      className="from-group"
                      key={`addressList-${index}-latitude`}
                    >
                      <label htmlFor={`addressList-${index}-latitude`}>
                        Latitude
                      </label>
                      <Field
                        id={`addressList-${index}-latitude`}
                        name={`addressList[${index}].latitude`}
                        className="form-control"
                      />

                      <ErrorMessage
                        name={`addressList[${index}].latitude`}
                        component="div"
                      />
                    </div>
                  )}

                  {address.longitude && (
                    <div
                      className="from-group"
                      key={`addressList-${index}-longitude`}
                    >
                      <label htmlFor={`addressList-${index}-longitude`}>
                        Longitude
                      </label>
                      <Field
                        id={`addressList-${index}-longitude`}
                        name={`addressList[${index}].longitude`}
                        className="form-control"
                      />

                      <ErrorMessage
                        name={`addressList[${index}].longitude`}
                        component="div"
                      />
                    </div>
                  )}
                </fieldset>
              ))}
            </div>

            <button
              className="btn btn-primary btn-block"
              type="submit"
              disabled={isSubmitting}
            >
              Sauvegarder et afficher l'attestation magique
            </button>

            <hr />

            <Link to="/" className="btn btn-info btn-block">
              Infos
            </Link>
            <button
              type="button"
              className="btn btn-warning btn-block"
              onClick={async () => {
                await clear();
                alert("Historique effacé.");
              }}
            >
              Effacer l'historique des adresses générées
            </button>
            <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={async () => {
                await localforage.clear();
                alert("Données effacées.");
                history.push("/presentation");
              }}
            >
              Effacer toutes les données stockées sur cet appareil
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
