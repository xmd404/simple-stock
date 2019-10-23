import axios from 'axios';
import { error, symbols, } from './utility';

export const fetchNews = () => {
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
};