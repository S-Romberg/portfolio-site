'use client';

import React from 'react';
import Body from '@/components/Body';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Writing from '@/components/Writing';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Body />
      <div className="flex flex-col justify-center lg:flex-row py-8">
        <Projects />
        <Writing />
      </div>
      <div className="bg-blue-100 w-screen flex justify-center items-center p-12">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Flu6gxHhXJ8?si=FpEANBe4JG-VxDHl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
      </div>
      <Contact />
    </div>
  );
}
