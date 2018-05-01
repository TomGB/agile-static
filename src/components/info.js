import React from 'react'

const Info = (searchResults = []) => (
  <aside>
    <h2>What's this?</h2>
    <p>
      The <a href='https://twitter.com/GDSteam'>GDS agile delivery community</a> added hundreds of links about agile, lean and people to a now defunct <a href='http://linkydink.io/groups/gds-agile-delivery-community'>Linkydink</a>. You can browse most of those links here.
    </p>
    <p>
      They were recovered by scraping the <a href='https://twitter.com/agilereading'>companion Twitter feed</a> and then linking to the top 3 URLs returned when searching Google for the article's title.
    </p>
    <p>
      Created by <a href='https://github.com/tomgb/'>Tom Banister</a> using Gatsby, Node, React, GraphQL
    </p>
  </aside>
)
export default Info
