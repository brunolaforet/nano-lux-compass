# **☀️ LUX · COMPASS**

**La boussole solaire de positionnement astronomique, version ultra-légère.**  
Nano App < 100 Ko • Zéro Pub • Zéro Cookie • Connexion requise uniquement à l'initialisation • Calcul local des éphémérides

👉 App : [brunolaforet.github.io/nano-lux-compass](https://brunolaforet.github.io/nano-lux-compass) 

---

## **🎯 Domaines d'application**

### 🥾 **1. Randonnée (Orientation Low-Tech)**

* **Indépendance réseau :** La connexion Internet est requise uniquement pour fixer la géolocalisation initiale au démarrage. Une fois la position établie, vous pouvez couper le réseau (Mode Avion) : l'application reste 100% opérationnelle en veille.
* **Économie de batterie :** L'arrêt des requêtes réseau et le code JavaScript natif minimaliste préservent l'autonomie du smartphone, un facteur de sécurité critique lors de longues sorties en nature.
* **Alternative magnétique :** Contrairement aux boussoles classiques, LUX · COMPASS n'est pas perturbée par les anomalies géologiques ou les interférences électroniques.

### 📸 **2. Photographie & Production Vidéo (Chasseurs de Lumière)**

* **Anticipation de la Golden Hour :** Affichage immédiat des plages horaires exactes de l'aube et du crépuscule doré pour planifier précisément les prises de vue.
* **Axe de lumière :** Permet de déterminer sur le terrain l'angle précis (azimut et élévation) où le soleil va percer à un instant T, sans dépendre d'une couverture réseau continue.

### 📐 **3. Architecture & Immobilier (Diagnostic d'Ensoleillement)**

* **Vérification d'exposition :** Permet de valider instantanément l'orientation réelle (Est, Ouest, Sud) des façades, balcons ou terrasses lors d'une visite de bien ou sur un chantier.
* **Impact des ombres :** L'analyse de la hauteur angulaire (élévation) du soleil aide à évaluer si les obstacles environnants (bâtiments, arbres) masqueront la lumière naturelle au fil de la journée.

---


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






