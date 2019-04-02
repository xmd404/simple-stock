import React from 'react';
import NewsClip from '../news-clip/news-clip';

const NewsClipListStyle = {
  overflowX: 'none',
  margin: '0',
  backgroundColor: '#F5F5F5'
}

const NewsClipList = () =>
  <div style={NewsClipListStyle}>
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
  </div>


export default NewsClipList;