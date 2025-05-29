// Debug script for map initialization
console.log('Map script loading...');

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');
    console.log('Leaflet available?', typeof L !== 'undefined');
    
    const mapElement = document.getElementById('map');
    console.log('Map element found?', mapElement);
    console.log('Map element dimensions:', mapElement?.offsetWidth, 'x', mapElement?.offsetHeight);
    
    if (typeof L === 'undefined') {
        console.error('Leaflet (L) is not defined! Check if Leaflet CSS/JS loaded properly.');
        return;
    }
    
    if (!mapElement) {
        console.error('Map element with id="map" not found!');
        return;
    }
    
    try {
        console.log('Creating map...');
        const map = L.map('map').setView([52.0, 5.0], 7);
        
        console.log('Adding tile layer...');
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);
        
        console.log('Adding test marker...');
        L.marker([52.0907, 5.1214]).addTo(map)
            .bindPopup('Test marker - Utrecht')
            .openPopup();
            
        console.log('Map initialized successfully!');
        
    } catch (error) {
        console.error('Error creating map:', error);
    }
});

// Also test if Leaflet loads
window.addEventListener('load', () => {
    console.log('Window loaded');
    console.log('Leaflet version:', L?.version || 'Not available');
});