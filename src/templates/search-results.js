import React from 'react'

const renderSeachResults = (searchResults = []) =>
  searchResults.map(({ title, description, href }, index) => (
    <a href={href} key={index}>
      <h3>{title}</h3>
      <cite>{href}</cite>
      <p className='description'>{description}</p>
    </a>
  ))
export default renderSeachResults
