import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  return (
    <section className='bg-law h-screen bg-cover bg-center-4  bg-no-repeat sm:bg-top grid justify-center sm:pl-[25rem] lg:pl-[35rem] '>
      <div> {''}</div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: 30 },
        }}
        className=''
      >
        <h1 className=' text-5xl lg:text-6xl'>
          <span className='text-just font-extrabold leading-relaxed '>
            We Fight
          </span>{' '}
          For <br /> Your Right
        </h1>
        <button className='bg-just rounded-full text-white font-semibold py-2 px-4 mt-8'>
          FREE CONSULTATION
        </button>
      </motion.div>
    </section>
  );
}
