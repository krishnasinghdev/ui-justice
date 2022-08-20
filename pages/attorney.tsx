import React from 'react';
import CallUs from '../components/CallUs';
import Header from '../components/Header';
import TeamCard from '../components/TeamCard';
import client1 from '../public/xperson.webp';
import client2 from '../public/xperson1.webp';
import client3 from '../public/xperson2.webp';

export default function attorney() {
  return (
    <>
      <Header t1='Our' t2='Expert Attorneys' />
      <main className='bg-[#37373F] py-[2rem] px-[2rem] xl:px-[12rem] '>
        <div className='grid lg:grid-cols-3  gap-4 my-8 justify-items-center '>
          <TeamCard img={client1} />
          <TeamCard img={client2} />
          <TeamCard img={client3} />
          <TeamCard img={client1} />
          <TeamCard img={client2} />
          <TeamCard img={client3} />
        </div>
      </main>
      <CallUs />
    </>
  );
}
