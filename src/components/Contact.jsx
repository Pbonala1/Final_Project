import React from "react";

import "./all.css";
import mail from "./images/gmail.png"
import linkedin from "./images/linkedin.png"
import github from "./images/github.png"

export const Contact = () => {
  return (
    <footer id="contact" className="footcontainer">
      <div className="text">
        <h2>Contact</h2>
        <p>Feel free to reach out to me!</p>
      </div>
      <ul className="links">
        <li className="link">
        <div className="cimg">
          <img src={mail} alt="Email icon" />
          </div>
          <a href="mailto:pravalikabonala@gmail.com">Email</a>
        </li>
        <li className="link">
        <div className="cimg">
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          </div>
          <a href="http://www.linkedin.com/in/pravalika-bonala-7a9b00202">Linkedin</a>
        </li>
        <li className="link">
          <div className="cimg">
          <img src={github} alt="Github icon" />
          </div>
          <a href="https://github.com/Pbonala1">Github</a>
        </li>
      </ul>
    </footer>
  );
};