---
# Leave the homepage title empty to use the site title
title:
date: 2025-10-11
type: landing

sections:
  - block: markdown
    content:
      title: Live Runway Camera
      subtitle: ''
      text: |
        <div style="max-width: 900px; margin: 0 auto; border:1px solid #e5e7eb; border-radius:12px; overflow:hidden; box-shadow:0 8px 24px rgba(0,0,0,.08); background:#fff;">
          <a href="https://myearthcam.com/11llrunway" target="_blank" rel="noopener noreferrer">
            <img
              id="runway-camera"
              src="https://static.earthcam.com/images/myearthcam/userthumbs/3/d5e62cf8d78f3ae8d77cdcfef66cde97.jpg"
              alt="11LL Runway Camera preview"
              style="display:block; width:100%; height:auto;">
          </a>

          <div style="padding:1.25rem; text-align:center;">
            <p style="margin:0 0 .75rem 0; font-size:1.05rem; font-weight:600;">
              Watch the 11LL live runway stream
            </p>
            <p style="margin:0 0 1rem 0;">
              Stream courtesy of EarthCam.
            </p>
          </div>
        </div>

        <script>
          (function () {
            var THUMB_URL = 'https://static.earthcam.com/images/myearthcam/userthumbs/3/d5e62cf8d78f3ae8d77cdcfef66cde97.jpg';
            var REFRESH_MS = 15 * 60 * 1000;

            function refreshRunwayCamera() {
              var img = document.getElementById('runway-camera');
              if (!img) return;

              var separator = THUMB_URL.indexOf('?') === -1 ? '?' : '&';
              img.src = THUMB_URL + separator + 't=' + Date.now();
            }

            function initRunwayCamera() {
              refreshRunwayCamera();
              setInterval(refreshRunwayCamera, REFRESH_MS);
            }

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initRunwayCamera);
            } else {
              initRunwayCamera();
            }
          })();
        </script>
    design:
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: markdown
    content:
      title: Airport Weather
      subtitle: ''
      text: |
        <div id="kpnt-weather" style="text-align: center;">
          <p>Loading weather data...</p>
        </div>
        <script src="/js/weather.js"></script>
    design:
      columns: '1'
      spacing:
        padding: ['20px', '0', '20px', '0']

  - block: hero
    content:
      title: |
        Metro Warbirds
      image:
        filename: mwb-logo.png
      text: |
        <br>
        
        **No Rules, No Dues, Nobody in Charge.**
        
        A group of friends that have been meeting at the EAA AirVenture in Oshkosh, Wisconsin every July since 1983.
  
  - block: markdown
    content:
      title: Our Story
      subtitle: ''
      text: |
        A group of friends that meet at the EAA AirVenture in Oshkosh, Wisconsin, during the last week in July of each year. The group started in 1983. Mike Heins aka the banjo player and Bernie Ockuly arrived in what could kindly be called a clapped out Navion. Mike had polished it with a Brillo pad and running water from a garden hose. The next aircraft following us in was a Champ in military colors, piloted by the late Dr. Doug Beechel and his friend, Robert "Jungle Bob" Crissman. I advised Doug the best way to tie down the Champ was to flip it on its back and drive stakes through the wings. I had been holding two cold beers behind my back and said, "Here, you two could probably use these." We camped together for the week and hooked up the follow year flying in together from Portage, Wisconsin. The group grew with old and new friends. Several years later Mike commented that his aircraft was really a warbird and that he should be parked at the north end of the flightline with the other warbirds.. We shouted back "The only kind of warbird your plane is..would be a Metro Warbird. You see, at the time, all the portable toilets were furnished by a company named "Metro." (Now all them bear the name "Waste Management." The name stuck even to the point of requisitioning two large Metro signs from the company and affixing them to each side of the fuselage. People, pilots, friends and fellow aviators have come and gone over the years, but we are arguably the oldest and largest group of like-minded aviators and their families, that have camped together with their airplanes.
    design:
      columns: '1'
---
