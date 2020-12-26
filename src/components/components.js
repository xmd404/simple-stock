import React from 'react';
import styled, { css } from 'styled-components';
import { capitalize } from '../utility';

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

export const ListCard = styled.div`
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

const LargeButton = styled.div`
  margin: 1.25em auto;
  width: 99%;
  max-width: 300px;
  border: 2px solid white;
  background-color: transparent;
  color: white;
  padding: 14px 28px;
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

export const Tips = () => (
	<TipContainer>
		<Tip>
		<span role="img" aria-label="leaf emoji">🌿</span> <b>Simple Tip</b> &nbsp;~&nbsp;{' '}
			<span id="">Save & invest 10% of your income. Compound interest is the 8th wonder of the world.</span>
		</Tip>
	</TipContainer>
);

const BetaMessage = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    max-width: 275px;
`

export const Beta = () =>
    <BetaMessage>
        <p>
            This is a private beta feature <span role="img" aria-label="lock emoji">🔒</span>
            <br/><br/>
            Signup below to join our waitlist + participate in future releases.
        </p>
        <br/>
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name
                    <br/>
                    <input type="text" name="name" className="form-input" placeholder="Alex Smith"/>
                </label>
            </p>
            <br/>
            <p>
                <label>Email
                    <br/>
                    <input type="email" name="email" className="form-input" placeholder="your@email.com"/>
                </label>
            </p>
            <br/>
            <hr/>
            <br/>
            <button type="submit" className="btn submit">Join Waitlist</button>
            <br/>
        </form>
    </BetaMessage>