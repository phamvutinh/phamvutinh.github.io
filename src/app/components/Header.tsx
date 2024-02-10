import React from 'react';
import LinkCustom from './LinkCustom';

const Header = () => {
  return (
    <header>
      <LinkCustom
        href="/contact"
        label="contact."
        className="fixed font-semibold top-[2vh] right-[3.5vw]"
      />
    </header>
  );
};

export default Header;
