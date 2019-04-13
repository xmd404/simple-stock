import React from 'react';
import ListItem from './list-item';
import ViewMoreButton from '../buttons/view-more-button';

const NewsClipListStyle = {
  overflowX: 'none',
  margin: '0',
  padding: '15px 4px',
  backgroundColor: '#F5F5F5',
};

const NewsClipList = () =>
  <div style={NewsClipListStyle}>
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ListItem />
    <ViewMoreButton />
  </div>

export default NewsClipList;