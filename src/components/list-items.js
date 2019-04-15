import React from 'react';
import styled, {css} from 'styled-components';

const ListItem = styled.div`
  display: inline-block;
  width: 15%;
  min-width: 260px;
  margin: 1.00em;
  padding: 5px 15px;
  color: #000;
  background-color: #FFF;
  border-radius: 5%;

  ${props =>
    props.primary &&
    css`
    margin: 0;
    min-width: 240px;
    max-width: 100%;
    color: #000;
    background-color: #FFF;
    border-radius: none;
    `};
`

export const StockListItem = (props, index) =>
  <ListItem key={index} primary>
    <hr/>
    <h2>{this.props.name}</h2>
    <p>Current: {data.current}</p>
    <p>High: {data.high}</p>
    <p>Low: {data.low}</p>
  </ListItem>

export const NewsListItem = () =>
  <ListItem>
    <h2>Headline</h2>
    <p>MM/DD/YYYY @ 11:11a</p>
    <p>Short briefing / preview ...</p>
  </ListItem>