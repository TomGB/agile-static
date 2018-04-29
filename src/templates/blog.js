import React from 'react'
import Helmat from 'react-helmet'

export default function Template({
  data: {
    tweetsJson: {
      from, date, tags, text, searchResults: [
        { href, title: alt } = {},
        { href: href2, title: alt2 } = {},
        { href: href3, title: alt3 } = {}
      ] = []
    }
  }
}) {
  return (
    <article>
      <a href={href} title={alt}>
        <h2>{text}</h2>
        <cite>{href}</cite>
        <p className='meta'>added by {from} - <time>{date}</time></p>
      </a>
      <a href={href2}  title={alt2}><cite>alt 2</cite></a>
      <a href={href3}  title={alt3}><cite>alt 3</cite></a>
    </article>
  )
}

export const postQuery = graphql`
  query TweetByIndex($index: Int!) {
    tweetsJson(index: { eq: $index }) {
      from
      date
      tags
      text
      searchResults {
        title
        href
        description
      }
      index
    }
  }
`
