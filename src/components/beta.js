import React from 'react';
import styled from 'styled-components';

const BetaMessage = styled.div`
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    max-width: 275px;
`

let Beta = () =>
    <BetaMessage>
        <h2>
            This is an open beta... so some features are not available yet.
            <br/><br/>
            Signup below to join our waitlist + participate in future releases.
        </h2>
        <br/>
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <h2>
                <label>Name
                    <br/>
                    <input type="text" name="name" className="form-input" placeholder="Alex Smith"/>
                </label>
            </h2>
            <br/>
            <h2>
                <label>Email
                    <br/>
                    <input type="email" name="email" className="form-input" placeholder="your@email.com"/>
                </label>
            </h2>
            <br/>
            <button type="submit" className="btn submit">Join Waitlist</button>
            <br/>
        </form>
    </BetaMessage>

export default Beta;