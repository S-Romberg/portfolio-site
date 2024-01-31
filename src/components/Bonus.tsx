import React from 'react';
import dog from '@public/logos/dog.png';
import dogAndI from '@public/logos/dogAndI.png';

export default function Bonus() {
  return (
    <div className="bonus">
      <h3>BONUS</h3>
      <p>You made it this far so you get to see my dog, Quinn</p>
      <div className="dog">
        <img src={dog} alt="my dog" />
        <img src={dogAndI} alt="me and my dog" />
      </div>
    </div>
  );
}
