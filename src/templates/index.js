import React, { Component } from 'react'
import Link from 'gatsby-link'
import renderSeachResults from './search-results'

const getDataByAuthor = (data, author) => {
  if (author === 'Show All') {
    return data;
  }

  if (author === 'Other') {
    return data.filter(({from}) => !from);
  }

  return data.filter(({from}) => from === author);
}

const renderContent = (data, author, complex) => {
  const filteredData = getDataByAuthor(data, author)

  return filteredData.map(
    (item, index) => {
      const {
        from,
        date,
        tags,
        text,
        searchResults
      } = item;

      const { href, title: alt } = searchResults && searchResults[0] || {};
      const { href: href2, title: alt2 } = searchResults && searchResults[1] || {};
      const { href: href3, title: alt3 } = searchResults && searchResults[2] || {};

      const renderLinks = (complex) => (
        !complex ? [
          <a key="1" href={href2}  title={alt2}><cite>alt 2</cite></a>,
          <a key="2" href={href3}  title={alt3}><cite>alt 3</cite></a>
        ] : renderSeachResults(searchResults || [])
      )

      return (
        <article key={index}>
          <a href={href} title={alt}>
            <h2>{text}</h2>
            {!complex && <cite>{href}</cite>}
            <p className='meta'>added by {from} - <time>{date}</time></p>
          </a>
          {renderLinks(complex)}
        </article>
      )
    }
  )
}

class IndexPage extends Component {
  constructor(props) {
    super(props);
    const data = props.data.allTweetsJson.edges.map(({node}) => node);

    const { complex } = props.data.sitePage.context;

    const authors = ['Show All'];
    data.forEach(({from}) => {
      if (from && !authors.includes(from)) {
        authors.push(from)
      }
    });

    authors.push('Other');

    this.state = {
      author: 'Show All',
      authors,
      data,
      complex
    };
  }

  renderAuthors() {
    return this.state.authors.map((author, index) => (
      <button key={index}
        className={this.state.author === author ? 'selected' : ''}
        onClick={() => { this.setState({ author }) }}
      >
        {author}
      </button>
    ))
  }

  render() {
    const { data, author, complex } = this.state;
    return(
      <main>
        <nav>
          <h2>Filter by author</h2>
          {this.renderAuthors()}
        </nav>
        {renderContent(data, author, complex)}
      </main>
    )
  }
}

export default IndexPage

export const allTweets = graphql`
  query ComplexQuery($path: String!) {
    sitePage(path: { eq: $path }) {
      path
      context {
        complex
      }
    }
    allTweetsJson {
      edges {
        node {
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
    }
  }
`
