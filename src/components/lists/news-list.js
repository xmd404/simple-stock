import React from 'react';
import ViewMoreButton from '../buttons/view-more-button';
import { NewsListItem } from '../list-items';

const NewsClipListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '15px 4px',
  backgroundColor: '#F5F5F5',
};

const NewsClipList = () =>
  <div style={NewsClipListStyle}>
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <ViewMoreButton />
  </div>

export default NewsClipList;