import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 850px;
	border-radius: 5%;
`;

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
	background-color: rgb(14, 17, 22);
	border-radius: 6%;
  	box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
	text-align: left;
	cursor: pointer

  ${(props) => props.news && css`text-align: left;`}
`;

export const NewsCard = styled.div`
	white-space: normal;
	display: inline-block;
	width: 250px;
	margin 0 0.75em 0.75em 0;
	color: #FFF;
	background-color: rgb(14, 17, 22);
	border-radius: 6%;
  	box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
  	text-align: left;

  ${(props) => props.news && css`text-align: left;`}
`;

export const Tint = styled.div`
	height: 100%
	width: 100%;
	background-color: #000;
	color: #FFF;
	border-radius: 6%;
	opacity: 0.8;
	z-index: 2;
`;

export const Headline = styled.div`
  padding: 0 1.25em;
  z-index: 3;
`;

export const Thumbnail = styled.img`
	height: auto;
	max-height: 125px;
	width: 100%;
	border-radius: 5% 5% 0 0;
	padding: 0;
`;

export const Logo = styled.img`
  height: 27px;
	margin: 20px 0;
`;