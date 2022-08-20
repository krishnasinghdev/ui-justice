import React from 'react';

export default function Counter() {
  return (
    <section className='flex flex-wrap lg:flex-nowrap justify-between  bg-[#37373F] pb-8 px-[2rem] xl:px-[12rem] gap-6'>
      <div>
        <h1 className='text-3xl lg:text-6xl text-white'>
          <span className='text-just font-extrabold'>50 Years</span> of
          Experience in Various Cases
        </h1>
      </div>
      <div className=' grid sm:grid-cols-2 gap-16'>
        <div>
          <h1 className='text-just text-8xl mb-4'>
            90<span className='text-white '>+</span>{' '}
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
            3K<span className='text-white '>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Cases Wins</h2>{' '}
          <p className='text-gray-300'>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div>
          <h1 className='text-just text-8xl mb-4'>
            2K<span className='text-white '>+</span>{' '}
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
            200<span className='text-white'>+</span>{' '}
          </h1>
          <h2 className='font-semibold text-lg text-white mb-2'> Attorneys</h2>
          <p className='text-gray-300'>
            {' '}
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
      </div>
    </section>
  );
}
