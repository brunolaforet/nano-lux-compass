# **☀️ LUX · COMPASS**

**La boussole solaire de positionnement astronomique, version ultra-légère.** Nano App < 100 Ko • Zéro Pub • Zéro Cookie • Connexion requise uniquement à l'initialisation • Calcul local des éphémérides

## **✨ Points Forts**

* **Ultra-légère :** Moins de 100 Ko au total, fidèle à la philosophie des "Nano Apps".
* **Navigation Solaire :** Détermination du Nord vrai par alignement de l'azimut et de l'élévation du soleil.
* **Données Éphémérides (Golden Hour) :** Calcul en temps réel des plages exactes de l'aube dorée et du crépuscule doré.
* **Idéal Randonnée & Autonomie :** La connexion réseau est indispensable uniquement pour établir la géolocalisation initiale. Elle peut être instantanément coupée (passage en Mode Avion) sitôt la position fixée.
* **Ultra-sobre en énergie :** L'absence d'échanges réseau continus et l'exécution de code minimaliste réduisent drastiquement la consommation de la batterie, un atout crucial sur le terrain.
* **Confidentialité :** Pas d'inscription, pas de tracking, aucun stockage de vos coordonnées sur un serveur externe.

## **📲 Installation Rapide**

1. Ouvrez [brunolaforet.github.io/nano-lux-compass](https://brunolaforet.github.io/nano-lux-compass) sur votre mobile.
2. **Android (Chrome) :** Menu ⋮ -> Installer l'application.
3. **iOS (Safari) :** Partager ⎋ -> Sur l'écran d'accueil.

## **🛠️ Stack Technique & Architecture**

Application web statique hébergée sur GitHub Pages :
* **Core :** HTML5, CSS3 (Tailwind CSS), JavaScript (Vanilla).
* **PWA :** Web App Manifest configuré pour une exécution plein écran native.
* **Cycle de connectivité :** Utilisation ponctuelle de l'API `navigator.geolocation` au démarrage. Une fois les coordonnées acquises, l'application est totalement indépendante du réseau.
* **Algorithmique & Performance :** Formules trigonométriques appliquées localement en JavaScript. Algorithme brut à haute performance, sans framework lourd ni requêtes d'arrière-plan, préservant les ressources du processeur.

## **🔒 Vie Privée & Transparence**

* **Calcul local unique :** Les données de localisation servent uniquement au calcul immédiat des éphémérides dans votre navigateur. Aucune coordonnée GPS n'est transmise à un serveur tiers ou conservée.
* **Zéro script tiers :** Absence totale de cookies, de trackers ou de scripts publicitaires.

## **⚖️ Licence & Commu**

* **Licence :** MIT (Libre d'utilisation, de modification et de distribution).
* **Contact :** Une question ou une suggestion d'optimisation ? Ouvrez une Issue sur le dépôt GitHub.






