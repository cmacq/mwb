---
# Leave the homepage title empty to use the site title
title:
date: 2025-10-11
type: landing

sections:
  - block: hero
    content:
      title: |
        Metro Warbirds
      image:
        filename: welcome.jpg
      text: |
        <br>
        
        A group of friends that meet at the EAA AirVenture in Oshkosh, Wisconsin, during the last week in July of each year. The group started in 1983. Mike Heins aka the banjo player and Bernie Ockuly arrived in what could kindly be called a clapped out Navion. Mike had polished it with a Brillo pad and running water from a garden hose. The next aircraft following us in was a Champ in military colors, piloted by the late Dr. Doug Beechel and his friend, Robert "Jungle Bob" Crissman. I advised Doug the best way to tie down the Champ was to flip it on its back and drive stakes through the wings. I had been holding two cold beers behind my back and said, "Here, you two could probably use these." We camped together for the week and hooked up the follow year flying in together from Portage, Wisconsin. The group grew with old and new friends. Several years later Mike commented that his aircraft was really a warbird and that he should be parked at the north end of the flightline with the other warbirds.. We shouted back "The only kind of warbird your plane is..would be a Metro Warbird. You see, at the time, all the portable toilets were furnished by a company named "Metro." (Now all them bear the name "Waste Management." The name stuck even to the point of requisitioning two large Metro signs from the company and affixing them to each side of the fuselage. People, pilots, friends and fellow aviators have come and gone over the years, but we are arguably the oldest and largest group of like-minded aviators and their families, that have camped together with their airplanes. Our motto.... NO not that one!!! ....is "No Rules, No Dues, Nobody in Charge."
  
  - block: collection
    content:
      title: Latest News
      subtitle:
      text:
      count: 5
      filters:
        author: ''
        category: ''
        exclude_featured: false
        publication_type: ''
        tag: ''
      offset: 0
      order: desc
      page_type: post
    design:
      view: card
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
          filename: coders.jpg
          filters:
            brightness: 1
          parallax: false
          position: center
          size: cover
          text_color_light: true
      spacing:
        padding: ['20px', '0', '20px', '0']
      css_class: fullscreen

  - block: collection
    content:
      title: Latest Preprints
      text: ""
      count: 5
      filters:
        folders:
          - publication
        publication_type: 'article'
    design:
      view: citation
      columns: '1'

  - block: markdown
    content:
      title:
      subtitle:
      text: |
        {{% cta cta_link="./people/" cta_text="Meet the team →" %}}
    design:
      columns: '1'
---
