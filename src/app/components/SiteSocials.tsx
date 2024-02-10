import React from 'react';
import Link from 'next/link';

const SiteSocials = () => {
  const SOCIALS = [
    { to: '/dashboard', name: 'drib' },
    { to: '/dashboard', name: 'twitter' },
    { to: '/dashboard', name: 'fbook' },
    { to: '/dashboard', name: 'insta' },
    { to: '/dashboard', name: 'github' }
  ];
  return (
    <ul className="p-0 m-0 flex md:fixed md:right-[3.5vw] md:-translate-y-[50%] md:rotate-[180deg] md:top-[50%] md:[writing-mode:vertical-lr]">
      {SOCIALS.map((social, index) => (
        <li key={index} className="py-6 px-5 md:px-0">
          <Link
            href={social.to}
            className="text-text-primary text-xs tracking-wider"
          >
            {social.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SiteSocials;
