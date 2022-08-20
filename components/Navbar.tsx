import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

const path = [
  { href: '/', title: 'Home' },
  { href: '/practice', title: 'Practice' },
  { href: '/service', title: 'Service' },
  { href: '/attorney', title: 'Attorney' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
];

export default function Navbar() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className='absolute w-full py-4 flex justify-between px-4 lg:justify-around items-center  '>
        <Link href={'/'}>
          <a className='text-black font-bold text-xl '>Justice.</a>
        </Link>

        {!showMenu && (
          <AiOutlineMenu
            className='text-xl lg:hidden'
            onClick={() => setShowMenu((prev) => !prev)}
          />
        )}

        <div className='text-gray-500 text-sm font-medium lg:flex gap-8 hidden'>
          {path.map(({ title, href }, index) => (
            <Link href={href} key={index}>
              <a
                className={
                  router.asPath === href ? 'text-black' : 'hover:text-black '
                }
              >
                {title}
              </a>
            </Link>
          ))}
        </div>
      </nav>

      {/* MOBILE MENU */}

      {showMenu && (
        <aside className='w-[60vw] h-screen fixed bg-white transition flex flex-col gap-5 p-4 duration-1000   right-0'>
          <ImCross
            onClick={() => setShowMenu(false)}
            className='self-end mr-4 text-2xl'
          />
          {path.map(({ title, href }, index) => (
            <Link href={href} key={index}>
              <a
                className={
                  router.asPath === href ? 'text-black' : 'hover:text-black '
                }
                onClick={() => setShowMenu(false)}
              >
                {title}
              </a>
            </Link>
          ))}
        </aside>
      )}
    </>
  );
}
