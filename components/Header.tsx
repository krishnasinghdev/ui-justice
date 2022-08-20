import React from 'react';

type HeaderType = {
  t1: String;
  t2: String;
};

export default function Header({ t1, t2 }: HeaderType) {
  return (
    <header className='bg-[#2D2D34] py-[5rem] lg:py-[7rem]'>
      <h1 className='text-center text-white my-auto text-3xl lg:text-5xl '>
        {t1} <span className='font-bold'>{t2}</span>{' '}
      </h1>
    </header>
  );
}
