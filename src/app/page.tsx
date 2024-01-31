'use client';

import React, { useState } from 'react';
import Body from '@/components/Body';
import Picture from '@/components/Picture';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';
import Header from '@/components/Header';

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="App" onClick={() => modal && setModal(false)}>
      <Header />
      <Body />
      <Picture />
      <Projects />
      <Contact showModal={() => setModal(true)} />
    </div>
  );
}
