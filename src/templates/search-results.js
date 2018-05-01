import React from 'react'

const renderSeachResults = (searchResults = []) => (
  <section className='links'>
    {searchResults.map(({ title, description, href }, index) => (
      <a href={href} key={index}>
        <h3>{title}</h3>
        <cite>{href}</cite>
        <p className='description'>{description}</p>
      </a>
    ))}
  </section>
)
export default renderSeachResults
