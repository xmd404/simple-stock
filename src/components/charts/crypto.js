import React, { Component } from 'react';
import { List, Title, Card, Logo } from './components';
import { error, symbols, getCryptoChart, Loading } from '../../utility';
import { ViewMoreButton } from '../miscellaneous/buttons';
import axios from 'axios';
import News from './news';

const ticker = {
	color: 'magenta',
};

// const container = {
// 	margin: '0 auto',
// 	width: '100%',
// 	maxWidth: '650px',
// 	borderRadius: '5%'
// };

class CryptoChart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			crypto: '',
		};
	}

	componentDidMount() {
		console.time('Fetching cryptos');
		axios.get(
      `https://api.coingecko.com/api/v3/coins/${window.location.href.split("/")[6]}
      `)
        .then((response) => {
            let crypto = response.data;
            this.setState({
                crypto: crypto,
                isLoaded: true
            });
            console.timeEnd('Fetching single crypto');
            console.log({ crypto }, response.status);
        })
        .catch(error());
	}

	render() {
		const { error, isLoaded, crypto } = this.state;
		if (error) {
			return <div>Error: {error.message}</div>;
		} else if (!isLoaded) {
			return <Loading />;
		} else {
			return (
				<div>
                    <Card key={crypto.symbol} crypto={crypto}>
                        <div style={{ float: 'left', width: '50%' }}>
                            <Logo src={crypto.image.thumb}/>
                            <b>
                                <h2>{crypto.symbol}</h2>
                            </b>
                            <p className="cardTicker" style={{ height: '75px'}}>{crypto.id}</p>
                        </div>
                        <div style={{ float: 'right', width: '50%', textAlign: 'right' }}>
                            <br/>
							<h2>${crypto.market_data.current_price.usd}</h2>
                        </div>
                    </Card>
					<br/>
					<News />
					<ViewMoreButton />
				</div>
			);
		}
	}
}

export default CryptoChart;
