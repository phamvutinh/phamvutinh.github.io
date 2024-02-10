import React from 'react';
import SiteSocials from './SiteSocials';
import Link from 'next/link';
import LinkCustom from './LinkCustom';

const Footer = () => {
  return (
    <footer className="flex justify-center fixed min-w-full bottom-0">
      <LinkCustom
        href="/blog"
        label="blog."
        className="fixed font-semibold bottom-[2vh] left-[3.5vw]"
      />
      <SiteSocials />
      <LinkCustom
        href="/projects"
        label="projects."
        className="fixed font-semibold bottom-[2vh] right-[3.5vw]"
      />
    </footer>
  );
};

export default Footer;
