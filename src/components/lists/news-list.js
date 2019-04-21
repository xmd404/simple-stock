import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getDateTime } from '../../utility';
import { ViewMoreButton } from '../buttons';

const SideScroll = styled.div`
  overflow: auto;
  white-space: nowrap;
`;

const NewsList = styled.div`
  margin: 0;
  padding: 15px 4px;
  background-color: #F5F5F5;
`;

const ListItem = {
  display: 'inline-block',
  width: '15%',
  minWidth: '260px',
  margin: '1.00em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
};

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
    console.time('Fetching articles');
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=news`
    )
    .then(response => {
      let articlesObj = response.data;
      let articlesArr = Object.values(articlesObj);
      let articles = [];
      articlesArr.forEach(stock => {
        articles = [...Object.values(stock.news)];
      });
      this.setState({
        articles: articles,
        isLoaded: true,
      });
      console.timeEnd('Fetching articles');
      console.log({ articles }, response.status);
    })
    .catch(error());
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
      return (<div>News list is Loading...</div>);
    } else {
      return (
          <NewsList>
            <div className={{SideScroll}}>
            {articles.slice(0, 4).map(article => (
              <a 
              key={article.datetime}
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              article={article}
              >
                <div style={ListItem}>
                  <p>{getDateTime(article.datetime)}</p>
                  <h2>{article.headline.substring(0, 45)}...</h2>
                  <p><u>{article.source}</u></p>
                </div>
              </a>
            ))}
            </div>
          </NewsList>
      )
    }
  }
}

export default News;