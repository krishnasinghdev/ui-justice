import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
export default function Counter() {
  return (
    <div className='flex flex-wrap lg:flex-nowrap justify-between  bg-[#37373F] pb-8 px-[2rem] xl:px-[12rem] gap-6'>
      <motion.div
        className='mb-8 lg:mb-0'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, y: -40 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h1 className='text-3xl lg:text-6xl text-white'>
          <span className='text-just font-extrabold'>50 Years</span> of
          Experience in Various Cases
        </h1>
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1 }}
        variants={{
          visible: { opacity: 1, y: -40 },
          hidden: { opacity: 0, y: 0 },
        }}
        className=' grid sm:grid-cols-2 gap-16'
      >
        <div>
          <h1 className='text-just text-8xl mb-4'>
            <CountUp start={0} end={90} delay={2} duration={2}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <span className='text-white '>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Awards</h2>
          <p className='text-gray-300 '>
            {' '}
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div>
          <h1 className='text-just text-8xl mb-4'>
            <CountUp start={0} end={3} delay={2} duration={3}>
              {({ countUpRef }) => (
                <>
                  {' '}
                  <span ref={countUpRef} />K
                </>
              )}
            </CountUp>
            <span className='text-white '>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Cases Wins</h2>{' '}
          <p className='text-gray-300'>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div>
          <h1 className='text-just text-8xl mb-4'>
            <CountUp start={0} end={2} delay={2} duration={3}>
              {({ countUpRef }) => (
                <>
                  {' '}
                  <span ref={countUpRef} />K
                </>
              )}
            </CountUp>
            <span className='text-white '>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Clients</h2>
          <p className='text-gray-300'>
            {' '}
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div>
          <h1 className='text-just text-8xl mb-4'>
            <CountUp start={0} end={3000} delay={2} duration={3}>
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
            <span className='text-white'>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Attorneys</h2>
          <p className='text-gray-300'>
            {' '}
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
