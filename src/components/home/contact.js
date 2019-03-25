import React from 'react'
import Container from '../styles/container'
import styled from "styled-components"
import { colors } from "../styles/lib"
import SectionHeader from '../styles/sectionHeader'

const ContactWrapper = styled.section`
    padding: 3rem 0 5rem 0;

    background: ${ colors.white };
    background: url(https://res.cloudinary.com/dov1pamgz/image/upload/v1547316989/bg.jpg)
    no-repeat center center fixed;
    background-size: cover;
    color: ${ colors.black };
    text-align: center;

    form {
        max-width: 900px;
        margin: 0 auto;

        h2 {
            margin: 1em 0 0.85em 0;
        }
        p {
            margin-bottom: 3em;
        }

        input, textarea {
            display: block;
            margin-bottom: 2rem;
            padding: 0.8rem 1rem;
            border: 1px solid ${ colors.lightgray };
            border-radius: 6px;
            width: 100%;
            box-sizing: border-box;

            color: ${ colors.black };
            box-shadow: none;

            &::placeholder {
                color: ${ colors.lightgray };
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
    }
`

const Contact = ({ action }) => (
    <ContactWrapper>
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
                <SectionHeader>
                    <h2>Contact Me</h2>
                </SectionHeader>
                <p>
                    Thanks for checking out my site. Please feel to leave me a note
                    below to get in touch
                </p>
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
    </ContactWrapper>
)

export default Contact
