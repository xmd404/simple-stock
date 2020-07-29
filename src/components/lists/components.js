import styled, { css } from 'styled-components';

export const Title = styled.div`
	margin: 35px 0 40px;
	padding: 0;	
	overflow-x: none;
	text-align: center;
`;

export const List = styled.div`
	margin: 25px 0;
	padding: 0 15px;
	overflow: auto;
	white-space: nowrap;
`;

export const Card = styled.div`
	white-space: normal;
	display: inline-block;
	width: 165px;
	margin 0 0.75em 0 0;
	padding: 5px 0 5px 20px;
	color: #FFF;
	background-color: #17141d;
	border-radius: 6%;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
  text-align: left;

  ${(props) => props.news && css`text-align: left;`}
`;

export const NewsCard = styled.div`
	white-space: normal;
	display: inline-block;
	width: 250px;
	margin 0 0.75em 0.75em 0;
	color: #FFF;
	background-color: #17141d;
	border-radius: 6%;
  	box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
  	text-align: left;

  ${(props) => props.news && css`text-align: left;`}
`;

export const Headline = styled.div`
  padding: 0 1.25em;
`;

export const Thumbnail = styled.img`
	height: auto;
	width: 100%;
	border-radius: 5% 5% 0 0;
	padding: 0;
`;

export const Logo = styled.img`
  height: 27px;
	margin: 20px 0;
`;