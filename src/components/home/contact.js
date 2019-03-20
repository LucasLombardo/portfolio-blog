import React from 'react'
import Container from '../styles/container'
import styled from "styled-components"
import { colors } from "../styles/lib"

const ScContact = styled.section`
    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    padding: 6rem 0 5rem 0;
    text-align: center;
    color: #3f3f3f;
    form {
        max-width: 900px;
        margin: 0 auto;
    }
    input, textarea {
        border: 2px solid #e4e4e4;
        border-radius: 6px;
        padding: 0.8rem 1rem;
        margin-bottom: 2rem;
        display: block;
        width: 100%;
        box-sizing: border-box;
        color: #3f3f3f;
        box-shadow: none;
        &::placeholder {
            color: #b2aaaa;
            font-style: italic;
        }
    }
    .name-email {
        display: flex;
        input {
            flex: 1;
            &:first-of-type {
                margin-right: 2rem;
            }
        }
    }
    .btn {
        margin-right: 1.2rem;
    }
`

const Contact = ({ action }) => (
    <ScContact>
        <Container>
            <form
                key="contact-form"
                name="contact-me"
                method="POST"
                action={action}
                data-netlify-honeypot="full-name"
                data-netlify="true"
            >
                <div style={{ display: `none` }}>
                    {/* Honeypot Field */}
                    <label htmlFor="full-name">
                        Don’t fill out this field if you’re a human.
                    </label>
                    <input type="text" id="full-name" name="full-name" />
                </div>
                <header>
                    <h2>Contact Me</h2>
                    <p>
                        Thanks for checking out my website! Please feel free to contact me
                        with any questions or opportunities
                    </p>
                </header>
                <div className="name-email">
                    <label htmlFor="name" className="sr-only">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <label htmlFor="email" className="sr-only">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <label htmlFor="message" className="sr-only">
                    Message
                </label>
                <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Message"
                    rows="8"
                    required
                />
                <button type="submit" className="btn button">
                    Send Message
                </button>
                <input type="hidden" name="form-name" value="contact-me" />
            </form>
        </Container>
    </ScContact>
)

export default Contact
