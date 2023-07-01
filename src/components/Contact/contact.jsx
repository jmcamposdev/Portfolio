import React from "react";
import "../../css/contact.css";
export default function Contact() {
  return (
    <section className="contact">
      <h2 className="title-effect">Contacta</h2>
      <div className="contact-button">
        <a
          className="gmail"
          target="_blank"
          rel="noreferrer"
          href="mailto:jmcamposdev@gmail.com"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <title>Mail</title>
            <rect
              x="48"
              y="96"
              width="416"
              height="320"
              rx="40"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M112 160l144 112 144-112"
            />
          </svg>
          jmcamposdev@gmail.com
        </a>

        <a
          className="github"
          target="_blank"
          rel="canonical"
          href="https://github.com/jmcamposdev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          jmcamposdev
        </a>
        <img alt="Jose Maria" src={require("../../img/person-600x600.png")} />
      </div>
    </section>
  );
}
