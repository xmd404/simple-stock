import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getDateTime, Loading } from '../../utility';

const Title = styled.div`
  height: 80px;
`;

const List = styled.div`
  margin: 0;
  padding: 15px 4px;
  background-color: #F5F5F5;
  overflow: auto;
  white-space: nowrap;
`;

const ListItem = {
  whiteSpace: 'normal',
  display: 'inline-block',
  width: '250px',
  margin: '1.75em 1.35em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
  overflowWrap: 'breakWord',
};

const Image = { 
  height: '175px',
  width: '100%',
  borderRadius: '5%',
  padding: '0.75em 0' 
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
    console.time('Fetching news');
    axios.get(
      `https://cloud.iexapis.com/beta/stock/market/batch?token=${process.env.REACT_APP_STOCK_API_KEY}&symbols=${symbols}&types=quote,news`
    )
    .then(response => {
      let data = response.data;
      let articlesArr = Object.values(data);
      let articles = articlesArr;
      this.setState({
        articles: articles,
        isLoaded: true,
      });
      console.timeEnd('Fetching news');
      console.log({ articles }, response.status);
    })
    .catch(error());
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return (<div>Error: {error.message}</div>);
    } else if (!isLoaded) {
      return (<Loading />)
    } else {
      return (
        <List>
          {articles.map(article => (
            <a 
            key={article.quote.symbol}
            article={article}
            href={article.news[0].url}
            target='_blank'
            rel='noopener noreferrer'
            >
              <div style={ListItem}>
                <img src={article.news[0].image} style={Image} />
                <p>{getDateTime(article.news[0].datetime)}</p>
                <Title>
                  <b><p>{article.news[0].headline}</p></b>
                </Title>
                <p><u>{article.news[0].source}</u></p>
              </div>
            </a>
          ))}
        </List>
      )
    }
  }
}

export default News;