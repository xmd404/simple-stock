import styled, { css } from 'styled-components';

export const Title = styled.div`
	overflow-x: none;
	margin: 35px 0 25px 50px;
  padding: 0;
`;

export const List = styled.div`
	margin: 1.75em 0.75em;
	padding: 0 20px;
	overflow: auto;
	white-space: nowrap;
`;

export const Card = styled.div`
	white-space: normal;
	display: inline-block;
	width: 250px;
	margin 0 1.75em 0 0;
	padding: 0;
	color: #FFF;
	background-color: #17141d;
	border-radius: 6%;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
  text-align: center;

  ${(props) => props.news && css`text-align: left;`}
`;

export const Headline = styled.div`
  padding: 0 1.25em;
`;

export const Thumbnail = styled.img`
	height: 175px;
	width: 100%;
	border-radius: 5% 5% 0 0;
	padding: 0;
`;

export const Logo = styled.img`
  height: 35px;
  margin: 20px 0;
`;

export default List;
