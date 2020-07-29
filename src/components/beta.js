import React from 'react';
import styled from 'styled-components';

const BetaMessage = styled.div`
    margin: auto;
    width: 100%;
    max-width: 250px;
    border: 1px solid #fff;
    border-radius: 2%;
    padding: 10px;
`

let Beta = () =>
    <BetaMessage>
        <p>This is an open beta + some features are not available yet. Signup to join our waitlist + participate in future releases.</p>
        <br/>
        <form name="contact" data-netlify="true" netlify-honeypot="bot-field" hidden>
            <input type="text" name="name" />
            <input type="email" name="email" />
            <textarea name="message"></textarea>
        </form>
        <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
                <label>Name:
                    <br/>
                    <input type="text" name="name"/>
                </label>
            </p>
            <br/>
            <p>
                <label>Email:
                    <br/>
                    <input type="email" name="email"/>
                </label>
            </p>
            <br/>
            <p>
                <button type="submit">Send</button>
            </p>
            <br/>
        </form>
    </BetaMessage>

export default Beta;