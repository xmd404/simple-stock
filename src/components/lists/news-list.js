import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, symbols, getDateTime, Loading } from '../../utility';

const Title = styled.div`
  padding: 0 1.25em;
`;

const List = styled.div`
  margin: 0;
  padding: 20px;
  overflow: auto;
  white-space: nowrap;
`;

const ListHeader = styled.div`
  overflow-x: none;
  margin: 0;
  padding: 2.75em;
  color: #fff;
  background-color: #000;
  text-align: center;
`;

const ListItem = styled.div`
  white-space: normal;
  display: inline-block;
  width: 250px;
  margin: 1.75em 1.35em;
  padding: 0;
  color: #000;
  background-color: #FFF;
  border-radius: 6%;
  overflow-wrap: breakWord;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
`;

const Image = styled.img` 
  height: 175px;
  width: 100%;
  border-radius: 5% 5% 0 0;
  padding: 0;
`;

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
        <div>
          <ListHeader>
            <p>
              <b>Live</b>, data-driven <b>trends</b> & <b>analysis</b>&nbsp; ✨
            </p>
          </ListHeader>
          <List>
            {articles.map(article => (
              <a 
                key={article.quote.symbol}
                article={article}
                href={article.news[0].url}
                target='_blank'
                rel='noopener noreferrer'
              >
                <ListItem>
                  <Image src={article.news[0].image} />
                  <Title>
                    <p>{getDateTime(article.news[0].datetime)}</p>
                    <b><p style={{ height: '100px' }}>{article.news[0].headline}</p></b>
                    <p><u>{article.news[0].source}</u></p>
                  </Title>
                </ListItem>
              </a>
            ))}
          </List>
        </div>
      )
    }
  }
}

export default News;