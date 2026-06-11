# **☀️ LUX · COMPASS**

**La boussole solaire de positionnement astronomique, version ultra-légère.**  
Nano App < 100 Ko • Zéro Pub • Zéro Cookie • Géolocalisation requise • Calcul local des éphémérides

## **✨ Points Forts**

* **Ultra-légère :** Moins de 100 Ko au total, fidèle à la philosophie des "Nano Apps".
* **Navigation Solaire :** Détermination du Nord vrai par alignement de l'azimut et de l'élévation du soleil.
* **Données Éphémérides (Golden Hour) :** Calcul en temps réel des plages exactes de l'aube dorée et du crépuscule doré.
* **Calcul Local :** Une fois la position acquise, l'ensemble des formules trigonométriques s'exécute instantanément sur l'appareil.
* **Confidentialité :** Pas d'inscription, pas de tracking, aucun stockage de vos coordonnées sur un serveur externe.

## **📲 Installation Rapide**

1. Ouvrez [brunolaforet.github.io/nano-lux-compass](https://brunolaforet.github.io/nano-lux-compass) sur votre mobile.
2. **Android (Chrome) :** Menu ⋮ -> Installer l'application.
3. **iOS (Safari) :** Partager ⎋ -> Sur l'écran d'accueil.

## **🛠️ Stack Technique & Architecture**

Application web statique hébergée sur GitHub Pages :
* **Core :** HTML5, CSS3 (Tailwind CSS), JavaScript (Vanilla).
* **PWA :** Web App Manifest configuré pour une exécution plein écran native.
* **Connectivité & API :** Requiert une connexion active et l'autorisation d'accès aux services de localisation de l'appareil (API `navigator.geolocation`) pour l'initialisation des coordonnées.
* **Algorithmique :** Formules trigonométriques appliquées localement pour le calcul de la position du soleil.

## **🔒 Vie Privée & Transparence**

* **Calcul local unique :** Les données de localisation servent uniquement au calcul immédiat des éphémérides dans votre navigateur. Aucune coordonnée GPS n'est transmise à un serveur tiers ou conservée.
* **Zéro script tiers :** Absence totale de cookies, de trackers ou de scripts publicitaires.

## **⚖️ Licence & Commu**

* **Licence :** MIT (Libre d'utilisation, de modification et de distribution).
* **Contact :** Une question ou une suggestion d'optimisation ? Ouvrez une Issue sur le dépôt GitHub.



