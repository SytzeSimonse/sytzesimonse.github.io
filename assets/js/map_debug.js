// Interactive Journey Map for Sytze Simonse
// Displays academic and professional journey across Europe and beyond

document.addEventListener('DOMContentLoaded', () => {
    initJourneyMap();
});

function initJourneyMap() {
    // Create map centered on Europe with disabled user interactions but allow programmatic movement
    const map = L.map('map', {
        center: [50.0, 8.0],
        zoom: 4,
        zoomControl: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        dragging: false,
        touchZoom: false,
        boxZoom: false,
        keyboard: false
    });

    // Add subtle tile layer that matches the architectural aesthetic
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        subdomains: 'abcd',
        maxZoom: 18
    }).addTo(map);

    // Journey locations with coordinates and descriptions
    const journeyLocations = [
        {
            name: 'Zeist',
            coords: [52.0889, 5.2317],
            description: 'Hometown • Where it all started',
            order: 1
        },
        {
            name: 'Utrecht',
            coords: [52.0907, 5.1214],
            description: 'Bachelor in Information Sciences • University of Utrecht',
            order: 2
        },
        {
            name: 'Bangkok',
            coords: [13.7563, 100.5018],
            description: 'Bachelor Exchange • Mahidol University',
            order: 3
        },
        {
            name: 'Wageningen',
            coords: [51.9692, 5.6661],
            description: 'Master in Geo-Information Sciences • Wageningen University',
            order: 4
        },
        {
            name: 'Terceira, Azores',
            coords: [38.7169, -27.2208],
            description: 'Master Exchange • University of the Azores',
            order: 5
        },
        {
            name: 'Rotterdam',
            coords: [51.9225, 4.4792],
            description: 'Current base • Tech specialist & entrepreneur',
            order: 6
        }
    ];

    // Create custom marker icons that match the architectural design
    const createJourneyIcon = (order, isCurrent = false) => {
        return L.divIcon({
            className: 'custom-div-icon',
            html: `<div style="
                background: ${isCurrent ? '#E07A5F' : '#4A6FA5'};
                width: ${isCurrent ? '18px' : '14px'};
                height: ${isCurrent ? '18px' : '14px'};
                border-radius: 50%;
                border: 2px solid #F8FAFC;
                box-shadow: 0 3px 12px rgba(0,0,0,0.25);
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: ${isCurrent ? '9px' : '8px'};
                color: white;
                font-weight: bold;
                font-family: 'Space Grotesk', sans-serif;
                transition: all 0.3s ease;
            ">${order}</div>`,
            iconSize: [18, 18],
            iconAnchor: [9, 9]
        });
    };

    // Add markers and collect coordinates for the journey path
    const pathCoordinates = [];
    const markers = [];

    journeyLocations.forEach((location, index) => {
        const isCurrentLocation = index === journeyLocations.length - 1;
        
        // Create marker
        const marker = L.marker(location.coords, {
            icon: createJourneyIcon(location.order, isCurrentLocation)
        }).addTo(map);

        // Create popup with architectural styling
        const popupContent = `
            <div style="
                text-align: center; 
                padding: 8px;
                font-family: 'Space Grotesk', sans-serif;
                min-width: 180px;
            ">
                <strong style="
                    color: #4A6FA5;
                    font-size: 1em;
                    display: block;
                    margin-bottom: 4px;
                ">${location.name}</strong>
                <span style="
                    font-size: 0.85em; 
                    color: #666;
                    line-height: 1.3;
                ">${location.description}</span>
            </div>
        `;

        marker.bindPopup(popupContent, {
            closeButton: false,
            offset: [0, -12],
            className: 'journey-popup'
        });

        // Add coordinates to path array (for potential future use)
        pathCoordinates.push(location.coords);
        markers.push(marker);

        // Add click handler for interactivity
        marker.on('click', () => {
            showLocationDetails(location, index);
        });

        // Add hover effects
        marker.on('mouseover', (e) => {
            e.target.openPopup();
        });
    });

    // Track current location for click-through functionality
    let currentLocationIndex = 0;
    let currentMapCenter = [52.0889, 5.2317]; // Start at Zeist

    // Function to calculate animation duration based on distance
    function calculateAnimationDuration(fromCoords, toCoords) {
        // Calculate distance in kilometers using Leaflet's built-in method
        const from = L.latLng(fromCoords[0], fromCoords[1]);
        const to = L.latLng(toCoords[0], toCoords[1]);
        const distance = from.distanceTo(to) / 1000; // Convert to kilometers
        
        // Base duration: 1.5 seconds for short distances
        // Scale factor: add 0.3 seconds per 1000km
        const baseDuration = 1.5;
        const scaleFactor = 0.0003; // 0.3 seconds per 1000km
        const duration = Math.max(baseDuration, baseDuration + (distance * scaleFactor));
        
        // Cap maximum duration at 5 seconds for very long distances
        return Math.min(duration, 5.0);
    }

    // Function to show detailed location information with distance-based animation
    function showLocationDetails(location, index) {
        // Close all other popups first
        markers.forEach(marker => marker.closePopup());
        
        // Calculate animation duration based on distance from current position
        const animationDuration = calculateAnimationDuration(currentMapCenter, location.coords);
        
        // Determine appropriate zoom level based on location
        let zoomLevel = 8; // Default for Dutch cities
        if (location.name === 'Bangkok') {
            zoomLevel = 7; // Slightly wider view for international locations
        } else if (location.name === 'Zeist') {
            zoomLevel = 12; // Closer for smaller cities
        } else if (location.name === 'Terceira, Azores') {
            zoomLevel = 9; // Closer for small island
        }
        
        // Move map to location with smooth, distance-proportional animation
        map.setView(location.coords, zoomLevel, {
            animate: true,
            duration: animationDuration,
            easeLinearity: 0.3
        });
        
        // Update current map center for next calculation
        currentMapCenter = location.coords;
        
        // Open popup after map has moved (proportional delay)
        const popupDelay = animationDuration * 0.6; // Show popup at 60% of animation completion
        setTimeout(() => {
            markers[index].openPopup();
        }, popupDelay * 1000);
        
        // Update current location index
        currentLocationIndex = index;
        
        // Optional: Log for potential future integrations
        console.log(`Journey to ${location.name}: ${animationDuration.toFixed(1)}s (distance-based)`);
    }

    // Add click-through functionality - cycle through locations on map click
    map.on('click', () => {
        // Move to next location
        currentLocationIndex = (currentLocationIndex + 1) % journeyLocations.length;
        showLocationDetails(journeyLocations[currentLocationIndex], currentLocationIndex);
    });

    // Auto-show first location after a brief delay  
    setTimeout(() => {
        if (markers.length > 0) {
            showLocationDetails(journeyLocations[0], 0);
        }
    }, 1000);

    console.log('Journey map initialized successfully with', journeyLocations.length, 'locations');
}