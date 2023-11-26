'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Body from '@/components/Body';
import Abilities from '@/components/Abilities';
import Picture from '@/components/Picture';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Resume from '@/components/Resume';

export default function Home() {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="App" onClick={() => modal && setModal(false)}>
      <Header />
      <Body />
      <Abilities />
      <Picture />
      <Projects />
      <Contact showModal={() => setModal(true)} />
      <Resume />
    </div>
  );
}
