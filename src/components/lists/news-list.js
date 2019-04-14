import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error } from '../../utility';
import { ViewMoreButton } from '../buttons';

const NewsList = styled.div`
  overflow-x: none;
  margin: 0;
  padding: 15px 4px;
  background-color: #F5F5F5;
`

const ListItem = {
  display: 'inline-block',
  width: '15%',
  minWidth: '260px',
  margin: '1.00em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
}

let marketStatus = (signal) => {
  const status = signal === 'close' ? 'closed' : 'open';
  return `The markets are ${status}.`;
} 

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=aapl,fb,tsla,snap,googl,amzn,msft,lyft,twtr,sq&types=news`
    )
    .then(response => {
      let articlesObj = response.data;
      let articlesArr = Object.values(articlesObj);
      let articles = Object.values(articlesArr[0].news);
      this.setState({
        articles: articles,
        isLoaded: true,
      });
      console.log({ articles }, response.status);
    })
    .catch(error())
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>News list is Loading...</div>;
    } else {
      return (
        <NewsList>
          {articles.map((article) =>
            <a 
              key={article.datetime}
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <div article={article} style={ListItem}>
                <h2>{article.headline}</h2>
                <p>{article.source}</p>
              </div>
            </a>
          )}
          <ViewMoreButton />
        </NewsList>
      )
    }
  }
}

  export default News;