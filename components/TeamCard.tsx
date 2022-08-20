import React from 'react';
import Image from 'next/image';
import { HiArrowNarrowRight } from 'react-icons/hi';

type cardType = {
  img: String | any;
};

export default function TeamCard({ img }: cardType) {
  return (
    <div className='mb-8 flex text-center lg:block flex-col justify-center items-center'>
      <div>
        <Image
          src={img}
          alt='clients images'
          className=' rounded-2xl'
          height={150}
          width={150}
        />

        <p className='text-just font-semibold'>
          Carl Anderson
          <span className='block text-white'> CEO, Co-Founder</span>
        </p>
      </div>
      <p className='my-2 text-center  font-normal text-gray-400'>
        Separated they live in. Separated they live in Bookmarksgrove right at
        the coast of the Semantics, a large language ocean.
      </p>
      <p className=' group cursor-pointer text-just'>
        <span className='group-hover:text-white '>Learn More </span>{' '}
        <span>
          <HiArrowNarrowRight className='group-hover:bg-just inline rounded-sm group-hover:text-white' />{' '}
        </span>
      </p>
    </div>
  );
}
