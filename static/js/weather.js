// Fetch METAR for KPNT
async function fetchKPNTWeather() {
  try {
    const response = await fetch('https://aviationweather.gov/api/data/metar?ids=KPNT&format=json&taf=true');
    const data = await response.json();
    
    if (data.length > 0) {
      const metar = data[0];
      const weatherDiv = document.getElementById('kpnt-weather');
      
      if (weatherDiv) {
        // Format the display
        const metarText = metar.rawText || metar.rawOb || 'METAR data not available';
        const timeValue = metar.reportTime || metar.observationTime || metar.obsTime || null;
        const time = timeValue ? new Date(timeValue).toLocaleString() : 'Unknown time';
        
        weatherDiv.innerHTML = `
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <h3 style="margin-top: 0;">KPNT (Pontiac Airport) Weather</h3>
            <p><strong>Updated:</strong> ${time}</p>
            <p><strong>METAR:</strong></p>
            <pre style="background-color: white; padding: 10px; border-radius: 3px; overflow-x: auto;">${metarText}</pre>
          </div>
        `;
      }
    }
  } catch (error) {
    console.error('Error fetching weather:', error);
    const weatherDiv = document.getElementById('kpnt-weather');
    if (weatherDiv) {
      weatherDiv.innerHTML = '<p style="color: red;">Unable to load weather data</p>';
    }
  }
}

// Fetch immediately on page load
document.addEventListener('DOMContentLoaded', fetchKPNTWeather);

// Update every 15 minutes
setInterval(fetchKPNTWeather, 900000);
