import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { error, getDateTime, Loading } from '../../utility';

const NewsList = styled.div`
  margin: 0;
  padding: 15px 4px;
  background-color: #F5F5F5;
  overflow: auto;
  white-space: nowrap;
`;

const ListItem = {
  display: 'inline-block',
  width: '100%',
  maxWidth: '250px',
  margin: '1.75em 1.35em',
  padding: '5px 15px',
  color: '#000',
  backgroundColor: '#FFF',
  borderRadius: '5%',
};

const Image = { 
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
    console.time('Fetching articles');
    axios.get(
      `https://stocknewsapi.com/api/v1/category?section=alltickers&items=50&sortby=trending&token=hevallvghgowxcdvjnkvw7jryqchlzt9agm5rxjz`
    )
    .then(response => {
      let data = response.data;
      let articlesArr = Object.values(data);
      let articles = articlesArr;
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
      return (<Loading />)
    } else {
      return (
        <NewsList>
          {articles[0].slice(0, 7).map(article => (
            <a 
            key={article.date}
            href={article.news_url}
            target='_blank'
            rel='noopener noreferrer'
            article={article}
            >
              <div style={ListItem}>
                <img src={article.image_url} style={Image} />
                <p>{article.date}</p>
                <h2 style={{ overflow: 'hidden' }}>{article.title}</h2>
                <p>Source:&nbsp; <u>{article.source_name}</u></p>
              </div>
            </a>
          ))}
        </NewsList>
      )
    }
  }
}

export default News;