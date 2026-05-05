      // Initialiseer de kaart
      var map = L.map('map').setView([51.2194, 4.4025], 13); // Coördinaten van Antwerpen

      // Voeg een OpenStreetMap-laag toe
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Voeg een marker toe op de locatie van Antwerpen
      L.marker([51.2194, 4.4025]).addTo(map)
          .bindPopup('Hier ben ik gevestigd!')
          .openPopup();