import React from 'react';
import './Footer.scss';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-center px-4 pb-8 bg-white">
      <p className="text-base text-center text-black">© {year} Paalamugan. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
