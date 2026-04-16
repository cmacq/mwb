// Fetch METAR for KPNT using a CORS-friendly endpoint
async function fetchKPNTWeather() {
  try {
    const response = await fetch('https://metar.vatsim.net/metar.php?id=KPNT');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const metarText = (await response.text()).trim();
    const weatherDiv = document.getElementById('kpnt-weather');

    if (weatherDiv) {
      const time = new Date().toLocaleString();
      weatherDiv.innerHTML = `
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px; text-align: left;">
          <h3 style="margin-top: 0;">KPNT (Pontiac Airport) Weather</h3>
          <p><strong>Updated:</strong> ${time}</p>
          <p><strong>METAR:</strong></p>
          <pre style="background-color: white; padding: 10px; border-radius: 3px; overflow-x: auto;">${metarText}</pre>
        </div>
      `;
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
