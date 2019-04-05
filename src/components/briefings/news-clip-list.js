import React from 'react';
import NewsClip from './news-clip';
import ViewMoreButton from '../buttons/view-more-button';

const NewsClipListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '15px 4px',
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