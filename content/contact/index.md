---
title: Contact
date: 2022-10-24

type: landing

sections:
  - block: contact
    content:
      title: Contact
      text: |-
        Let us know your interest in Metro Warbirds!
      email: billthacker@gmail.com
      
      # Automatically link email and phone or display as text?
      autolink: true
      
      contact_links:
        - icon: map-marker
          icon_pack: fas
          name: Metrowarbirds HQ - 11LL
          link: 'https://adip.faa.gov/agis/public/#/simpleAirportMap/11LL'
    
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: true
        name: contact
    design:
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle: ''
      text:
    design:
      columns: '1'
      background:
        image: 
          filename: contact.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen
---
