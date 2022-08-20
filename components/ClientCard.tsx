import Image from 'next/image';
import React from 'react';
import client from '../public/xperson.webp';

export default function ClientCard() {
  return (
    <div className='mb-4'>
      <p className='bg-white p-4 rounded-lg'>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in.
        Separated they live in Bookmarksgrove right at the coast of the
        Semantics, a large language ocean.
      </p>
      <div className='flex mt-4 gap-4'>
        <Image
          src={client}
          alt='clients images'
          className=' rounded-full'
          height={50}
          width={50}
        />

        <p className='text-white font-semibold'>
          Carl Anderson
          <span className='block text-gray-400'> CEO, Co-Founder</span>
        </p>
      </div>
    </div>
  );
}
