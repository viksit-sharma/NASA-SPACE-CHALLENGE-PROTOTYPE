# StellerX 🛰️

(/assets/logo.png)

*Bringing NASA's universe to your fingertips through interactive, personal stories.*

[![Challenge](https://img.shields.io/badge/NASA%20Space%20Apps-Challenge%202025-blue)](https://www.spaceappschallenge.org/)
[![Status](https://img.shields.io/badge/Status-Live%20Prototype-green)](https://viksit-sharma.github.io/NASA-SPACE-CHALLENGE-PROTOTYPE/)
[![Tech](https://img.shields.io/badge/Tech-HTML%20%7C%20CSS%20%7C%20JS-yellow)](https://viksit-sharma.github.io/NASA-SPACE-CHALLENGE-PROTOTYPE/)

## ## Live Demo

**See the live prototype in action:** **[https://viksit-sharma.github.io/NASA-SPACE-CHALLENGE-PROTOTYPE/](https://viksit-sharma.github.io/NASA-SPACE-CHALLENGE-PROTOTYPE/)**

## ## About The Project

StellerX was born from a simple idea: **space exploration should feel personal**. While NASA provides a universe of incredible data, it can often feel distant and abstract. Our mission is to bridge the gap between that vast cosmic data and personal, human experience.

This prototype transforms raw satellite telemetry and astronomical images into beautiful, interactive stories that connect, educate, and inspire. By making space personal—by linking it to your life, your curiosity, and your sense of wonder—we foster a deeper connection with our planet and the cosmos beyond.

## ## Features

This prototype showcases the core concept of StellerX with a fully functional live map and a roadmap for future stories.

* **🛰️ Live ISS Tracker:** The centerpiece of our prototype.
    * **Real-time Position:** Tracks the International Space Station's location, updated every 5 seconds.
    * **Live Telemetry:** Displays the ISS's current Latitude, Longitude, Altitude (km), and Velocity (in both km/h and mph).
    * **Pulsing Icon:** A photorealistic ISS icon with a glowing pulse animation makes it easy to spot against the detailed map.
    * **Official Branding:** Features the NASA logo in the map attribution for an authentic feel.

* **🗺️ Hybrid Satellite Map:**
    * A high-resolution satellite view of Earth provided by Esri.
    * Includes a label layer for countries and cities, providing valuable context.
    * **No-Wrap Rendering:** The map presents a single, seamless globe without repeating when zoomed out.

* **✨ Futuristic & Responsive UI:**
    * A sleek, space-themed design with a floating glassmorphism navbar.
    * Fully responsive layout that works beautifully on desktops, tablets, and mobile phones.
    * Interactive elements like a glowing call-to-action button and a custom hamburger menu animation.

* **📖 Project Showcase:** Outlines the next interactive stories to be built, including:
    * **"Postcards from Mars"**: Receive a unique photo from a Mars rover.
    * **"Your Cosmic Calendar"**: See NASA's Picture of the Day from any special date.
    * **"Earth Watcher's Journal"**: A visual diary of our planet from deep space.

## ## Tech Stack

This prototype was built with a focus on accessibility and performance, using core web technologies without heavy frameworks.

* **Frontend:**
    * HTML5
    * CSS3 (with Flexbox & Grid for responsive layouts)
    * Vanilla JavaScript (ES6+)
* **APIs & Libraries:**
    * **[Leaflet.js](https://leafletjs.com/)**: An open-source JavaScript library for interactive maps.
    * **[Where the ISS at?](https://wheretheiss.at/w/developer)**: A free REST API for real-time ISS location and telemetry data.
* **Assets:**
    * **[Google Fonts](https://fonts.google.com/)**: Orbitron & Lato.
    * Logos and imagery from NASA.

## ## Getting Started

To run this prototype locally, simply follow these steps:

1.  Clone the repository or download the project files.
2.  Navigate to the project folder.
3.  Open the `index.html` file in your web browser.

No special servers or dependencies are required.

## ## Future Development

This prototype is just the beginning. Our immediate goal is to fully implement the other three "Stories" outlined on the website, each powered by a different NASA API:

1.  **Cosmic Calendar:** Integrate the NASA **APOD (Astronomy Picture of the Day) API**.
2.  **Postcards from Mars:** Integrate the NASA **Mars Rover Photos API**.
3.  **Earth Watcher's Journal:** Integrate the NASA **EPIC (Earth Polychromatic Imaging Camera) API**.

## ## Acknowledgments

* **NASA** for making their incredible data and imagery publicly available to inspire and educate.
* The creators of the **Leaflet.js** library.
* The team behind the **"Where the ISS at?"** API.
* **Esri** for providing high-quality satellite map tiles.
