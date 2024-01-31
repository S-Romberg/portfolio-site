import React from 'react';

function Header() {
  return (
    <div id="description" className="flex flex-col pt-16 md:p-32 md:pt-44 md:pb-20 space-y-8 justify-center items-center">
      <h2 className="text-3xl text-slate-600 text-center">Full Stack Software Engineer</h2>
      <p className="p-4 md:w-[40rem] text-xl text-slate-600 md:text-justify">
        I am a full stack software engineer currently expanding my skills and abilities as a Full Stack
        Technical Lead at Brewer Digital.
        <br />
        With a recent Computer Science degree from Western Governors University and training from a
        coding bootcamp in 2018, I have developed a balanced understanding of software that has enabled me to solve problems both quickly and cleanly.
      </p>
    </div>
  );
}

export default Header;
