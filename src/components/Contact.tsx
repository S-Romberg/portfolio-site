import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneSquare, faFilePdf } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  return (
    <div>
      <div className="text-white bg-blue-950">
        <div className="flex flex-col md:flex-row gap-16 justify-center items-center p-16">
          <img className="h-40" src="/logos/logo-white.png" alt="logo" />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon icon={faPhoneSquare} />
              <p>(720) 515–8462</p>
            </div>
            <div className="flex gap-2  items-center">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>spencer.romberg@gmail.com</p>
            </div>
            <a className="flex gap-2  items-center" href="https://github.com/S-Romberg" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
              <p>github.com/s-romberg</p>
            </a>
            <a className="flex gap-2  items-center" href="https://www.linkedin.com/in/spencer-romberg/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
              <p>linkedin.com/in/spencer-romberg</p>
            </a>
            {/* <a className="flex gap-2  items-center" href="https://docs.google.com/document/d/1hOq1HQuGBHpz_55ZnPIEWsr49SLkV9g9it6IXoh7_EM" target="_blank" rel="noopener noreferrer"> */}
            {/*  <FontAwesomeIcon icon={faFilePdf} /> */}
            {/*  <p>resume</p> */}
            {/* </a> */}
          </div>
        </div>
      </div>
      <div className="p-4"><p>Spencer Romberg | 2024</p></div>
    </div>
  );
}
