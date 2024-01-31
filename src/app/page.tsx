'use client';

import React, { useState } from 'react';
import Body from '@/components/Body';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="App" onClick={() => modal && setModal(false)}>
      <Header />
      <Body />
      <Projects />
      <Contact showModal={() => setModal(true)} />
    </div>
  );
}
