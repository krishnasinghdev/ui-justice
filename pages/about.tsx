import React from 'react';
import CallUs from '../components/CallUs';
import Header from '../components/Header';
import Practice from '../components/Practice';
import Slide from '../components/Slide';
import TeamCard from '../components/TeamCard';
import client1 from '../public/xperson.webp';
import client2 from '../public/xperson1.webp';
import client3 from '../public/xperson2.webp';

export default function about() {
  return (
    <>
      <Header t1='About' t2='Company' />
      <section className='flex flex-wrap lg:flex-nowrap justify-between bg-[#37373F] py-[5rem] lg:py-[8rem] px-[2rem] xl:px-[12rem] gap-8'>
        <div>
          <h1 className='text-5xl text-white mb-4'>
            Why <span className='text-just font-bold'>Choose Us?</span>
          </h1>
          <p className='text-gray-300'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.{' '}
          </p>
          <ul className='text-white mt-4 pl-4'>
            <li> ✔️ {'  '} Far far away, behind the word</li>
            <li> ✔️ {'  '} Far from the countries Vokalia</li>
            <li> ✔️ {'  '} Separated they live in Bookmarksgrove</li>
          </ul>
        </div>
        <Slide />
      </section>
      <main className='bg-[#37373F] py-[2rem] px-[2rem] xl:px-[12rem] '>
        <h1 className='text-white text-3xl lg:text-5xl'>
          Our
          <span className='text-just font-bold'> Team</span>
        </h1>
        <div className='grid lg:grid-cols-3  gap-4 my-8 justify-items-center '>
          <TeamCard img={client1} />
          <TeamCard img={client2} />
          <TeamCard img={client3} />
        </div>
      </main>
      <Practice />
      <CallUs />
    </>
  );
}
