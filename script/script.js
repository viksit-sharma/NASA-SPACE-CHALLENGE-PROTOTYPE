document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const sidebar = document.getElementById('sidebar');
    const allLinks = document.querySelectorAll('a[href^="#"]');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    allLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            if (sidebar.classList.contains('active')) {
                menuToggle.classList.remove('active');
                sidebar.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const issApiUrl = 'https://api.wheretheiss.at/v1/satellites/25544';
    let issMap;
    let issMarker;
    let isFirstLoad = true;

    function initMap() {
        issMap = L.map('iss-map', { noWrap: true, minZoom: 3, attributionControl: false }).setView([0, 0], 3);

        const customAttribution = 
            '<a href="https://www.nasa.gov" target="_blank" style="display: flex; align-items: center; text-decoration: none; color: #ddd;">' + 
                '<img src="data:image/png;base64,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" alt="NASA Logo" style="height: 22px; margin-right: 8px;">' +
                '<span style="color: black; font-weight: bold;">NASA</span>' + 
            '</a>';
        L.control.attribution({prefix: customAttribution}).addTo(issMap);

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Tiles &copy; Esri'
        }).addTo(issMap);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}').addTo(issMap);

        const issIcon = L.icon({
            iconUrl: '/assets/iss.png',
            iconSize: [85, 85],
            iconAnchor: [42, 42],
            className: 'iss-icon-pulse'
        });

        issMarker = L.marker([0, 0], { icon: issIcon }).addTo(issMap);
    }

    async function getISSData() {
        try {
            const response = await fetch(issApiUrl);
            const data = await response.json();
            const { latitude, longitude, velocity, altitude } = data;

            issMarker.setLatLng([latitude, longitude]);

            if (isFirstLoad) {
                issMap.setView([latitude, longitude], 4);
                isFirstLoad = false;
            }
            
            document.getElementById('lat').textContent = latitude.toFixed(4);
            document.getElementById('lon').textContent = longitude.toFixed(4);
            document.getElementById('alt').textContent = altitude.toFixed(2);
            
            const velocityMph = velocity * 0.621371;
            document.getElementById('vel-kmh').textContent = velocity.toFixed(2);
            document.getElementById('vel-mph').textContent = velocityMph.toFixed(2);

        } catch (error) {
            console.error("Error fetching ISS data:", error);
        }
    }

    if (document.getElementById('iss-map')) {
        initMap();
        getISSData();
        setInterval(getISSData, 5000);
    }
});