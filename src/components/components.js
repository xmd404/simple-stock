import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { capitalize } from '../utility';

export const Container = styled.div`
	margin: 0 auto;
	width: 100%;
	max-width: 850px;
	border-radius: 5%;
`;

export const Title = styled.div`
	margin: 35px 0 40px 20px;
	padding: 0;	
	overflow-x: none;
`;

export const List = styled.div`
	margin: 25px 0;
	padding: 0 15px;
	overflow: auto;
	white-space: nowrap;
`;

export const ListCard = styled.li`
	white-space: normal;
	display: inline-block;
	width: 165px;
	margin 0 0.75em 0 0;
	padding: 5px 0 5px 20px;
	color: #FFF;
	background-color: rgb(14,17,22);
	border-radius: 6%;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
	text-align: left;
	cursor: pointer

  ${(props) => props.news && css`text-align: left;`}
`;

export const ChartCard = styled.div`
	display: flex;
	justify-cotent: space-around;
	width: auto;
	margin: 0 auto;
	padding: 0 20px;
	color: #FFF;
	cursor: pointer

  ${(props) => props.news && css`text-align: left;`}
`;

export const NewsCard = styled.li`
	white-space: normal;
	display: inline-block;
	width: 225px;
	margin 0 0.75em 0.75em 0;
	color: #FFF;
	background-color: rgb(14,17,22);
	border-radius: 6%;
  box-shadow: 0px 1px 25px rgba(0,0,0,0.1);
	text-align: left;
	background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */

  ${(props) => props.news && css`text-align: left;`}
`;

export const Tint = styled.div`
	height: 100%
	width: 100%;
	background-color: #000;
	color: #FFF;
	border-radius: 6%;
	opacity: 0.7;
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

const LargeButton = styled.div`
  margin: 1.25em auto;
  width: 99%;
  max-width: 300px;
  border: none;
  border-radius: 10px;
  background-color: rgb(54, 118, 203);
  color: white;
  padding: 16px 24px;
  cursor: pointer;
  text-align: center;
`

export const ViewMoreButton = () =>
  <LargeButton>
    <b>
      <p>
        {`View More ${capitalize(window.location.href.split("/")[5])}`}
      </p>
    </b>
  </LargeButton>

export const RobinhoodLink = ({ stocks }) =>
  stocks.slice(0, 20).map((stock) => (
    <a href="https://join.robinhood.com/xavierd-c7bcab" target="_blank">
      <LargeButton>
        <b>
          <p>
            {`Buy ${stock.quote.symbol.toUpperCase()} on Robinhood`}
          </p>
        </b>
      </LargeButton>
    </a>
  ));

export const CoinbaseLink = ({ crypto }) =>
  <a href="https://coinbase.com/join/duncan_1da" target="_blank">
    <LargeButton>
      <b>
        <p>
          {`Buy ${crypto.symbol.toUpperCase()} on Coinbase`}
        </p>
      </b>
    </LargeButton>
  </a>

const TipContainer = styled.div`
	margin: 0;
	padding: 25px;
	text-align: center;
`;

const Tip = styled.p`
  font-weight: 400;
  max-width: 360px;
  margin 0 auto;
`;


export const tips = [
  `Save & invest 10% of your income. Compound interest is the 8th wonder of the world.`,
  `Pay off high interest debt first. You will pay less over time and get out of debt sooner.`,
  `Keep your credit utilization under 30%. This makes up a third of your credit score.`,
  `Stocks, crypto, & forex are volatile assets. Only invest money you can afford to lose.`,
  `Time in the market beats timing the market. Invest consistantly and hold for 4-7 years.`,
  `Use dollar-cost averaging to minimize risk when investing in volatile assests. `,
];

export const Tips = () => {
  // set state
  const [tip, setTip] = useState([]);
  // 
  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * tips.length);
	  setTip(tips[randomNumber]);
  }, []);
  // render tip
  return (
    <TipContainer>
		<Tip>
		<span role="img" aria-label="leaf emoji">🌿</span> <b>Simple Tip</b> &nbsp;~&nbsp;{' '}
			<span id="tip">{tip}</span>
		</Tip>
	</TipContainer>
  );
};

const BetaMessage = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    max-width: 300px;
`

export const Beta = () =>
    <BetaMessage>
        <h2>
            This is an exclusive private beta feature &nbsp;<span role="img" aria-label="lock emoji">🔒</span>
            <br/><br/>
            Signup to join our waitlist:
        </h2>
        <br/>
        <form name="beta-signup" action="https://formspree.io/f/xjvppjjp" method="POST">
            <h3>
                <label>Name
                    <br/>
                    <input type="text" name="name" className="form-input" placeholder="Alex Smith" required/>
                </label>
            </h3>
            <h3>
                <label>Email
                    <br/>
                    <input type="email" name="email" className="form-input" placeholder="your@email.com" required/>
                </label>
            </h3>
            <br/>
            <button type="submit" className="btn submit">Join Waitlist</button>
            <br/>
        </form>
    </BetaMessage>

  export const ViewerWindow = styled.div`
    height: auto;
    width: 100%;
    background-color: rgb(14,17,22);
    opacity: 0.9;
    z-index: 100;
  `;

  export const ViewerPlayer= styled.iframe`
    height: auto;
    width: auto;
    background-color: rgb(14,17,22);
    opacity: 0.9;
    z-index: 100;
  `;