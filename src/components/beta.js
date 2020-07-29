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
        <p>
            This is a private beta feature 🔒
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

export default Beta;