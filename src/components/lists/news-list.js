import React from 'react';
import styled from 'styled-components';
import { ViewMoreButton } from '../buttons';
import { NewsListItem } from '../list-items';

const NewsList = styled.div`
  overflow-x: none;
  margin: 0;
  padding: 15px 4px;
  background-color: #F5F5F5;
`

const News = () =>
  <NewsList>
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <NewsListItem />
    <ViewMoreButton />
  </NewsList>

  export default News;