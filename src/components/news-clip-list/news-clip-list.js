import React from 'react';
import NewsClip from '../news-clip/news-clip';
import ViewMoreButton from '../view-more-button/view-more-button';

const NewsClipListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '15px 5px',
  backgroundColor: '#F5F5F5',
};

const NewsClipList = () =>
  <div style={NewsClipListStyle}>
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <NewsClip />
    <ViewMoreButton />
  </div>

export default NewsClipList;