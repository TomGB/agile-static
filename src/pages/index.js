import React from 'react'
import Link from 'gatsby-link'
import data from '../../data_out.json';

const renderContent = () => {
  return data.map(({ from, date, tags, text, searchResults: [
    { href, title: alt } = {},
    { href: href2, title: alt2 } = {},
    { href: href3, title: alt3 } = {}
  ] = [] }) => (
    <article>
      <a href={href} title={alt}>
        <h2>{text}</h2>
        <p className='meta'>{from} - <time>{date}</time></p>
      </a>
      <a href={href2}  title={alt2}>link 2</a>
      <a href={href3}  title={alt3}>link 3</a>
    </article>
  ))
}

const IndexPage = () => (
  <main>
    {renderContent()}
  </main>
)

export default IndexPage
