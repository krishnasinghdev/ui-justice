import { motion } from 'framer-motion';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

type CardType = { title: String; icon: String | any };

export default function ExpertiseCard({ title, icon }: CardType) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 30 },
      }}
      className='p-8 rounded flex flex-col justify-start bg-white'
    >
      <p className='inline  bg-just self-start my-2 rounded-full p-4'>{icon}</p>
      <h1 className='text-just font-semibold '>{title}</h1>
      <p className='my-2  text-left font-normal text-gray-800'>
        Separated they live in. Separated they live in Bookmarksgrove right at
        the coast of the Semantics, a large language ocean.
      </p>
      <p className=' group cursor-pointer'>
        <span className='group-hover:text-just '>Learn More </span>{' '}
        <span>
          <HiArrowNarrowRight className='group-hover:bg-just inline rounded-sm group-hover:text-white' />{' '}
        </span>
      </p>
    </motion.div>
  );
}
