'use client';

import React from 'react';
import Body from '@/components/Body';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Projects />
      <Contact />
    </div>
  );
}
