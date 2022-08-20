import React from 'react';

const homeItems = [
  'About Us',
  'Practice Area',
  'Services',
  'Attorneys',
  'Terms',
  'Privacy',
];
const prArea = [
  'Banking Law',
  'Comercial Law',
  'Corporate Law',
  'Family Law',
  'Media Law',
];
const serviceItems = ['Labor Law', 'Employment', 'Property Law', 'Prosecution'];

export default function Footer() {
  return (
    <footer className='bg-[#37373F] grid grid-cols-2 gap-4 sm:grid-cols-4 justify-items-start pl-4 sm:pl-0 sm:justify-items-center py-8'>
      <div>
        <h1 className='text-white text-xl mb-4 '>Home</h1>
        <ul>
          {homeItems.map((val, index) => (
            <li key={index}>
              <a className='text-just border-b-2 mb-2 hover:scale-105 inline-block border-just'>
                {val}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='text-white text-xl mb-4 '>Practice Area</h1>
        <ul>
          {prArea.map((val, index) => (
            <li key={index}>
              <a className='text-just border-b-2 mb-2 hover:scale-105 inline-block border-just'>
                {val}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='text-white text-xl mb-4 '>Services</h1>
        <ul>
          {serviceItems.map((val, index) => (
            <li key={index}>
              <a className='text-just border-b-2 mb-2 hover:scale-105 inline-block border-just'>
                {val}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='text-white text-xl mb-4 '>Contact</h1>
        <ul>
          <li className='text-white'>43 Raymouth Rd. Baltemoer, London 3910</li>
          <li className='text-just'>info@justice</li>
          <li className='text-just'>+98 9495949090</li>
        </ul>
      </div>
    </footer>
  );
}
