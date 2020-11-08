# Liberté !

L'attestation COVID magique qui restaure vos libertés fondamentales.
Utiliser l'application : https://liberte.vercel.app/
Toutes les infos : https://liberte.vercel.app/presentation



Ce projet est basé sur [Create React App](https://create-react-app.dev/).

## Lancer l'environnement de développement

    npm install
    npm start

## Déployer sa propre instance

Consultez [le guide de déploiement sur le site de Create React App](https://create-react-app.dev/docs/deployment/).

### Utiliser ses propres instances de Overpass et de Nominatim

*Liberté !* utilise les données de [Open Street Map](https://www.openstreetmap.org) via les projets [Overpass](https://wiki.openstreetmap.org/wiki/Overpass_API) et [Nominatim](https://nominatim.org/) pour trouver des adresses proches, et géocoder vos adresses personelles.

Par défault, les instances publiques fournies par [overpass-api.de](https://overpass-api.de) et [nominatim.org](https://nominatim.openstreetmap.org) sont utilisées.
Il est aussi possible d'utiliser vos propres instances :

* [instructions pour installer Overpass](https://overpass-api.de/no_frills.html)
* [instructions pour installer Nominatim](https://nominatim.org/release-docs/latest/admin/Installation/)

Une fois installé construisez le projet avec la commande suivante puis déployer le en vous référant à la section précèdente.

    REACT_APP_OVERPASS_API=https://overpass-api.example.com/api/interpreter REACT_APP_NOMINATIM_API=https://nominatim.example.com/search npm run build
