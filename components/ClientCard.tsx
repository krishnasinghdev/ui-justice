import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import client from '../public/xperson.webp';

export default function ClientCard() {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -50 },
      }}
      className='mb-4'
    >
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
    </motion.div>
  );
}
