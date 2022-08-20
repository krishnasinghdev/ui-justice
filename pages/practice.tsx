import React from 'react';
import ExpertiseCard from '../components/ExpertiseCard';
import Header from '../components/Header';
import { RiSuitcaseLine } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';
import { BiTargetLock } from 'react-icons/bi';
import { GiChessRook } from 'react-icons/gi';

export default function practice() {
  return (
    <>
      <Header t1='Our' t2='Expert Attorneys' />
      <main className='bg-[#37373F] py-[2rem] px-[2rem] xl:px-[12rem] '>
        <div className='grid lg:grid-cols-4 gap-8 my-6 '>
          <ExpertiseCard
            title='Labor and Employment'
            icon={<RiSuitcaseLine className='text-white' />}
          />
          <ExpertiseCard
            title='Corporate & Civil Litigation'
            icon={<FiTarget className='text-white' />}
          />
          <ExpertiseCard
            title='Intellectual Proerty Law'
            icon={<BiTargetLock className='text-white' />}
          />
          <ExpertiseCard
            title='Criminal Prosecution and Defense'
            icon={<GiChessRook className='text-white' />}
          />
          <ExpertiseCard
            title='Labor and Employment'
            icon={<RiSuitcaseLine className='text-white' />}
          />
          <ExpertiseCard
            title='Corporate & Civil Litigation'
            icon={<FiTarget className='text-white' />}
          />
          <ExpertiseCard
            title='Intellectual Proerty Law'
            icon={<BiTargetLock className='text-white' />}
          />
          <ExpertiseCard
            title='Criminal Prosecution and Defense'
            icon={<GiChessRook className='text-white' />}
          />
        </div>
      </main>
    </>
  );
}
