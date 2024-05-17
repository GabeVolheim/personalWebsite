// src/components/MainContent.js
import React from 'react';

const MainContent = () => {
  return (
    <main className="flex-grow p-4">
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <p>Hello! I'm a software developer with a passion for low-level languages and competitive gaming.</p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul>
          <li>Project 1: Description</li>
          <li>Project 2: Description</li>
        </ul>
      </section>
    </main>
  );
};

export default MainContent;
