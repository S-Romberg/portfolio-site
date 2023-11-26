import React from 'react';
import arrow from 'public/logos/arrow.png';

export default function Header() {
  return (
    <header className="App-header">

      <video className="landing-viewport__video" playsInline autoPlay loop muted>
        <source className="video" src="public/personal-site.mp4" type="video/mp4" />
      </video>
      <div className="name">
        <h1 className="spence">Spencer Romberg</h1>
        <div>
          <a href="/#description"><img className="arrow" src={arrow} alt="arrow" /></a>
        </div>
      </div>
    </header>
  );
}
