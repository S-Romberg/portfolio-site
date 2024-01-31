import React from 'react';

export default function Header() {
  return (
    <header className="App-header">
      <video className="landing-viewport__video z-1" autoPlay loop muted>
        <source className="video" src="/personal-site.mp4" type="video/mp4" />
      </video>
      <div className="md:mt-32 text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-[5rem] text-white opacity-80">Spencer Romberg</h1>
        <div>
          <a href="/#description">
            <img className="h-16 pt-8 md:h-28 w-auto" src="/logos/arrow.png" alt="arrow" />
          </a>
        </div>
      </div>
    </header>
  );
}
