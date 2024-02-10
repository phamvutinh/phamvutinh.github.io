import React from 'react';
import Link from 'next/link';

type LinkCustomProps = {
  href: string;
  label: string;
  className: string;
};

const LinkCustom = ({ href, label, className }: LinkCustomProps) => {
  return (
    <div className={className}>
      <Link href={href}>
        <span className="inline-block leading-5 py-6">{label}</span>
      </Link>
    </div>
  );
};

export default LinkCustom;
