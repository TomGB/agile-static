import React from 'react'
import Link from 'gatsby-link'
import data from '../../data_out.json';

const renderSeachResults = (searchResults = []) =>
  searchResults.map(({ title, description, href }) => (
    <a href={href}>
      <h3>{title}</h3>
      <p className='description'>{description}</p>
    </a>
  ))

const renderContent = () => {
  return data.map(({ from, date, tags, text, searchResults }) => (
    <article>
      <h2>{text}</h2>
      <p className='meta'>{from} - <time>{date}</time></p>
      {renderSeachResults(searchResults)}
    </article>
  ))
}

const IndexPage = () => (
  <main>
    {renderContent()}
  </main>
)

export default IndexPage
