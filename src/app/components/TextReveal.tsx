'use client';
import gsap from 'gsap';
import React from 'react';

const TextReveal = () => {
  React.useEffect(() => {
    gsap.to('.char', {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1
    });
  }, []);

  return (
    <div className="flex overflow-hidden">
      {'Pham.tinh'.split('').map((char, index) => (
        <h1 key={index} className="char uppercase text-8xl font-bold">
          {char}
        </h1>
      ))}
    </div>
  );
};

export default TextReveal;
