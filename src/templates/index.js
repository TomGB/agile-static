import React, { Component } from 'react'
import Link from 'gatsby-link'
import data from '../../data/data_out.json';

const getDataByAuthor = (author) => {
  if (author === 'Show All') {
    return data;
  }

  if (author === 'Other') {
    return data.filter(({from}) => !from);
  }

  return data.filter(({from}) => from === author);
}

const renderContent = (author) => {
  return getDataByAuthor(author).map(
    ({ from, date, tags, text, searchResults: [
      { href, title: alt } = {},
      { href: href2, title: alt2 } = {},
      { href: href3, title: alt3 } = {}
    ] = [] }, index) => (
      <article key={index}>
        <a href={href} title={alt}>
          <h2>{text}</h2>
          <cite>{href}</cite>
          <p className='meta'>added by {from} - <time>{date}</time></p>
        </a>
        <a href={href2}  title={alt2}><cite>alt 2</cite></a>
        <a href={href3}  title={alt3}><cite>alt 3</cite></a>
      </article>
    )
  )
}


class IndexPage extends Component {
  constructor(props) {
    super(props);

    console.log(props.data);

    const authors = ['Show All'];
    data.forEach(({from}) => {
      if (from && !authors.includes(from)) {
        authors.push(from)
      }
    });

    authors.push('Other');

    this.state = { author: 'Show All', authors };
  }

  renderAuthors() {
    return this.state.authors.map((author, index) => (
      <button
        key={index}
        className={this.state.author === author ? 'selected' : ''}
        onClick={() => { this.setState({ author }) }}
      >
        {author}
      </button>
    ))
  }

  render() {
    return(
      <main>
        <nav>
          <h2>Filter by author</h2>
          {this.renderAuthors()}
        </nav>
        {renderContent(this.state.author)}
      </main>
    )
  }
}

export default IndexPage
