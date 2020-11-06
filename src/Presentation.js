import React from "react";
import { Link } from "react-router-dom";

export default function Presentation() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Liberté !</h1>

        <p className="lead">
          L'attestation COVID <b>magique</b> qui restaure vos libertés
          fondamentales.
        </p>

        <hr />

        <p>
          <Link to="/form" className="btn btn-primary btn-lg">
            <i className="fas fa-id-card-alt"></i> Générer mon attestation
            magique
          </Link>
        </p>
      </div>

      <p>
        <b>
          <i>Liberté !</i> est un{" "}
          <a
            href="https://developer.mozilla.org/fr/docs/Web/Progressive_web_apps/Installable_PWAs"
            target="_blank"
            rel="noreferrer"
          >
            site web installable en tant qu'app
          </a>{" "}
          qui génère en permanence et en tout lieu une attestation COVID-19
          valide.
          <br />
          <i>Liberté !</i> vous permet à nouveau de vous déplacer, de vous
          réunir librement et même de manifester !
        </b>
      </p>

      <h2>Fonctionnalités</h2>

      <p>
        Avec <i>Liberté !</i>, <b>vous êtes toujours en règle</b> ! Ouvrez
        l'app, une attestation valides s'affiche. Ou que vous soyez. Quelque
        soit le temps depuis lequel vous êtes dehors.
      </p>

      <p>
        <i>Liberté !</i> est donc un générateur d'attestations COVID qui propose
        des fonctionnalités supplémentaires comparé au générateur du
        gouvernement :
      </p>

      <ul>
        <li>L'app sauvegarde (en local) vos informations ;</li>
        <li>
          Vous pouvez stocker plusieurs adresses, l'app sélectionne
          automatiquement celle qui se trouve a moins d'1km de votre position
          (sans avoir besoin de régénérer l'attestation) ;
        </li>
        <li>
          Si vous êtes à plus d'1km de toutes vos addresses renseignées, l'app
          trouvera automatiquement une adresse valide qui se trouve à moins
          d'1km d'où vous vous trouvez, et la fera apparaître instantanément sur
          l'attestation, sans avoir besoin de la régénérer (fonctionnalité
          désactivable) ;
        </li>
        <li>
          Une heure de sortie datant de moins d'1 heure sera toujours affichée
          (fonctionnalité désactivable) ;
        </li>
        <li>
          Vous pouvez antidater la date de sortie et le QR code ne vous
          mouchardera pas (le QR code l'attestation officielle contient sa date
          de création, qui n'apparaît nulle part en clair... la délation, cette
          tradition française).
        </li>
      </ul>

      <h2>Pourquoi une telle app ?</h2>

      <p>
        Sous prétexte de crise sanitaire, l'État supprime des libertés aussi
        fondamentales que celle d'aller et venir où bon nous semble, celle de se
        réunir et celle de manifester. Ces mesures{" "}
        <a
          href="https://www.lemonde.fr/planete/article/2020/10/31/coronavirus-dans-le-monde-la-slovaquie-va-tester-l-ensemble-de-la-population-une-premiere-mondiale_6057993_3244.html"
          target="_blank"
          rel="noreferrer"
        >
          comptent parmi les plus autoritaires prises en Europe
        </a>
        . La France est l'un des seuls pays à avoir mis en place cette
        attestation infantilisante et cette restriction de déplacement
        arbitraire d'1 kilomètre autour du domicile. Cet "état d'urgence
        sanitaire"{" "}
        <a
          href="https://www.mediapart.fr/journal/france/251020/etat-d-urgence-sanitaire-de-grandes-voix-s-alarment-d-une-restriction-historique-des-libertes"
          target="_blank"
          rel="noreferrer"
        >
          est d'ailleurs jugé très inquiétant même par la Commission Nationale
          Consultative des Droits de l'Homme et la Défenseure des droits
        </a>
        .
      </p>

      <p>
        Dans le même temps, l'État ne fait rien pour empêcher les entreprises
        capitalistes{" "}
        <a
          href="https://www.europe1.fr/societe/salarie-employeur-que-dit-la-loi-sur-le-teletravail-4002185#eztoc56225214_1"
          target="_blank"
          rel="noreferrer"
        >
          d'imposer à leurs salariés de venir au travail
        </a>{" "}
        , les écoles (principaux clusters avec les lieux de travail) restent
        ouvertes pour permettre aux parents de continuer à enrichir leurs
        patrons et en conséquence{" "}
        <a
          href="https://france3-regions.francetvinfo.fr/paris-ile-de-france/paris/interruption-trafic-ligne-5-du-metro-c-est-tres-galere-monde-se-pousse-1889118.html"
          target="_blank"
          rel="noreferrer"
        >
          les transports en commun sont surchargés
        </a>
        .
      </p>

      <p>
        Sous prétexte sanitaire, l'État réalise donc enfin{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Chicago_Boys"
          target="_blank"
          rel="noreferrer"
        >
          le vieux rêve des néo-libéraux
        </a>{" "}
        : toute sociabilité, toute pratique des loisirs, toute organisation
        politique, syndicale, associative ou culturelle sont désormais
        strictement interdites. Seul le travail reste autorisé. Le sacrifice
        collectif au nom de la sacro-sainte croissance est encouragé.
      </p>

      <h2>
        Utilisez <i>Liberté !</i> sans propager le virus !
      </h2>

      <p>
        Grâce à l'app, retrouvez votre liberté sans craindre les représailles de
        l'État et de ses flics. Mais gardez en tête que{" "}
        <b>le COVID est dangereux</b> et très contagieux ! Faites usage de vos
        libertés retrouvées avec responsabilité, protégez-vous et surtout
        protégez les plus vulnérables :
      </p>

      <ul>
        <li>
          <a
            href="https://twitter.com/BFMTV/status/1303440414033301505"
            target="_blank"
            rel="noreferrer"
          >
            Respectez les gestes barrières ;
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Poulin2012/status/1300057831459127297"
            target="_blank"
            rel="noreferrer"
          >
            Portez un masque ;
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/moreauchevrolet/status/1277259897420361731"
            target="_blank"
            rel="noreferrer"
          >
            Évitez les contacts proches (gardez au moins 6 pas de distance entre
            chaque personne) ;
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Francois_Ruffin/status/1303327022530338817"
            target="_blank"
            rel="noreferrer"
          >
            Privilégiez les rencontres en extérieur (sic) ;
          </a>
        </li>
        <li>Si ce n'est pas possible, aérez les pièces ;</li>
        <li>
          <a
            href="https://twitter.com/Raph_journalist/status/1322899377938190337"
            target="_blank"
            rel="noreferrer"
          >
            Et surtout ne prenez pas exemple sur la police, n'organisez pas de
            COVID-parties.
          </a>
        </li>
      </ul>

      <h2>
        Quelques exemples d'activités rendues à nouveau possibles par{" "}
        <i>Liberté !</i>
      </h2>

      <ul>
        <li>
          Se promener dans la nature même si l'on habite à plus d'1 kilomètre
          d'un parc ou d'une fôret, ou que l'on ne dispose pas ;
          <a
            href="https://www.franceinter.fr/emissions/la-main-verte/la-main-verte-07-mai-2017"
            target="_blank"
            rel="noreferrer"
          >
            d'un parc privé de 2 hectares comme le couple Macron
          </a>{" "}
          ;
        </li>
        <li>
          <a
            href="https://www.lepoint.fr/politique/confinement-darmanin-vu-en-plein-jogging-a-plus-de-1-km-de-sa-residence-04-11-2020-2399416_20.php"
            target="_blank"
            rel="noreferrer"
          >
            Faire un footing sans tourner en rond autour de son lotissement
            comme le ministre de l'intérieur
          </a>{" "}
          ;
        </li>
        <li>
          <a
            href="https://twitter.com/LarrereMathilde/status/1323540619579580418"
            target="_blank"
            rel="noreferrer"
          >
            Aller soutenir ceux qui luttent ;
          </a>
        </li>
        <li>
          Participer aux réunions (désormais interdites) de son groupe
          politique, de son syndicat ou de son association ;
        </li>
        <li>
          Voir ses proches et sa famille (en faisant attention) plutôt
          qu'uniquement{" "}
          <a
            href="https://www.huffingtonpost.fr/richie-frieman/les-9-collegues-les-plus-penibles_b_3980076.html"
            target="_blank"
            rel="noreferrer"
          >
            ses collègues de boulot.
          </a>
        </li>
      </ul>

      <h2>Qui a accès a mes données ?</h2>

      <p>
        Toutes vos données personnelles à l'exception de votre position et de
        vos adresses ne quittent pas votre téléphone, elles sont stockées en
        local et ne sont transmises à aucun serveur.
      </p>

      <p>
        Pour trouver des adresses proches, votre position est envoyée au serveur
        de{" "}
        <a
          href="https://www.openstreetmap.org"
          target="_blank"
          rel="noreferrer"
        >
          Open Street Map
        </a>{" "}
        , un projet de cartographie libre et collaboratif (voir{" "}
        <a
          href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
          target="_blank"
          rel="noreferrer"
        >
          leur politique de confidentialité
        </a>
        ) . Les positions de adresses renseignées sont elles aussi trouvées en
        utilisant le serveur de Open Street Map.
      </p>

      <p>
        L'hébergeur de l'application (par défaut{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>{" "}
        -{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noreferrer"
        >
          politique de confidentialité
        </a>
        ) a accès a votre{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Adresse_IP"
          target="_blank"
          rel="noreferrer"
        >
          adresse IP
        </a>
        , mais pas aux données saisies dans le formulaire ni à votre position.
        Vous pouvez aussi héberger vous même l'application, qui est un logiciel
        libre (voir le point suivant).
      </p>

      <p>
        Pour vous garantir un anonymat maximal, nous vous conseillons d'utiliser{" "}
        <a href="https://www.torproject.org" target="_blank" rel="noreferrer">
          Tor
        </a>
        , ou un{" "}
        <a href="https://protonvpn.com" target="_blank" rel="noreferrer">
          VPN
        </a>
        .
      </p>

      <h2>Code source et bibliothèques utilisées</h2>

      <p>
        Cette application est{" "}
        <a
          href="https://www.gnu.org/philosophy/free-sw.fr.html"
          target="_blank"
          rel="noreferrer"
        >
          un logiciel libre
        </a>{" "}
        publié sous{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Licence_MIT"
          target="_blank"
          rel="noreferrer"
        >
          la licence MIT
        </a>
        . Vous pouvez l'étudier, le modifier, le redistribuer et{" "}
        <a
          href="https://create-react-app.dev/docs/deployment"
          target="_blank"
          rel="noreferrer"
        >
          l'héberger sur vos propres serveurs
        </a>{" "}
        (ce que nous conseillons). Son code source{" "}
        <a
          href="https://github.com/covid-liberte/liberte"
          target="_blank"
          rel="noreferrer"
        >
          est disponible sur GitHub
        </a>
        .
      </p>

      <p>Elle utilise (entre autres) :</p>

      <ul>
        <li>
          une version modifiée du{" "}
          <a
            href="https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020"
            target="_blank"
            rel="noreferrer"
          >
            code du générateur de PDF officiel
          </a>
        </li>
        <li>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            React
          </a>{" "}
          (pour l'interface utilisateur)
        </li>
        <li>
          {" "}
          <a
            href="https://create-react-app.dev"
            target="_blank"
            rel="noreferrer"
          >
            Create React App
          </a>{" "}
          (pour le squelette)
        </li>
        <li>
          <a
            href="https://localforage.github.io/localForage/"
            target="_blank"
            rel="noreferrer"
          >
            localforage
          </a>{" "}
          (pour le stockage local)
        </li>
        <li>
          <a
            href="https://github.com/njj/haversine"
            target="_blank"
            rel="noreferrer"
          >
            haversine
          </a>{" "}
          (pour les calculs de distance via la formule du même nom)
        </li>
        <li>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            Bootstrap
          </a>{" "}
          et{" "}
          <a href="https://bootswatch.com" target="_blank" rel="noreferrer">
            Bootswatch
          </a>{" "}
          (pour le rendu visuel)
        </li>
      </ul>

      <h2>Qui a créé cette app ?</h2>

      <p>
        Un collectif de{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Un_manifeste_hacker#Du_nom_Hacker"
          target="_blank"
          rel="noreferrer"
        >
          hackers
        </a>{" "}
        <a
          href="https://fr.wikipedia.org/wiki/Libertaire"
          target="_blank"
          rel="noreferrer"
        >
          libertaires
        </a>
        .
      </p>
      <p>
        <Link to="/form" className="btn btn-primary btn-lg">
          <i className="fas fa-id-card-alt"></i> Générer mon attestation magique
        </Link>
      </p>
    </div>
  );
}
