import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
	overflow-x: none;
	margin: 0;
	padding: 2.75em;
	text-align: center;
`;

const List = styled.div`
	margin: 0;
	padding: 15px 4px;
	overflow: auto;
	white-space: nowrap;
	text-align: center;
`;

const ListItem = styled.div`
	display: inline-block;
	height: 375px;
	width: 100%;
	max-width: 250px;
	margin: 1.75em 1.35em;
	padding: 5px 15px;
	color: #fff;
	background-color: #17141d;
	border-radius: 5%;
`;

const Image = styled.img`
	max-height: 250px;
	width: auto;
`;

const DataSourcePage = () => (
	<div>
		<Header>
			<h2>
				<b>Data Sources</b>
			</h2>
			<p>
				Top <b>currency pairs</b> from across the &nbsp;🌎
			</p>
		</Header>
		<List>
			<ListItem>
				<br/>
				<Image src={'../assets/stock_news_api_logo.svg'} />
				<h2>Stock News API</h2>
				<a href="https://stocknewsapi.com" target="_blank" rel="noopener noreferrer">
					Website
				</a>
				&nbsp; | &nbsp;
				<a href="https://stocknewsapi.com/documentation" target="_blank" rel="noopener noreferrer">
					Docs
				</a>
			</ListItem>
			<ListItem>
				<br/>
				<Image src={'../assets/iex_cloud_api_logo.png'} />
				<h2>IEX Cloud</h2>
				<a href="https://iexcloud.io/" target="_blank" rel="noopener noreferrer">
					Website
				</a>
				&nbsp; | &nbsp;
				<a href="https://iexcloud.io/docs/api/" target="_blank" rel="noopener noreferrer">
					Docs
				</a>
			</ListItem>
			<ListItem>
				<br/>
				<Image src={'../assets/fixer_api_logo.png'} />
				<h2>Fixer</h2>
				<a href="https://fixer.io/" target="_blank" rel="noopener noreferrer">
					Website
				</a>
				&nbsp; | &nbsp;
				<a href="https://fixer.io/documentation" target="_blank" rel="noopener noreferrer">
					Docs
				</a>
			</ListItem>
			<ListItem>
				<br/>
				<Image src={'../assets/coingecko_logo.png'} />
				<h2>CoinGecko</h2>
				<a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">
					Website
				</a>
				&nbsp; | &nbsp;
				<a href="https://www.coingecko.com/api/documentations/v3#/" target="_blank" rel="noopener noreferrer">
					Docs
				</a>
			</ListItem>
		</List>
	</div>
);

export default DataSourcePage;
