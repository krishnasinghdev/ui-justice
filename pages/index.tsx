import type { NextPage } from 'next';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import ClientCard from '../components/ClientCard';
import Practice from '../components/Practice';
import CallUs from '../components/CallUs';
import ExpertiseCard from '../components/ExpertiseCard';
import { RiSuitcaseLine } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';
import { BiTargetLock } from 'react-icons/bi';
import { GiChessRook } from 'react-icons/gi';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Practice />
      <Counter />
      <main className='bg-[#2D2D34] py-[5rem] lg:py-[8rem] px-[2rem] xl:px-[12rem] '>
        <h1 className='text-white text-3xl lg:text-5xl'>
          <span className='text-just font-bold'>Happy</span> Clients
        </h1>
        <div className='grid lg:grid-cols-3 gap-8 my-8 '>
          <ClientCard />
          <ClientCard />
          <ClientCard />
        </div>
      </main>
      {/* <Expertise /> */}
      <main className='bg-[#37373F]  py-[5rem] lg:py-[8rem] px-[2rem] xl:px-[12rem] '>
        <h1 className='text-white mb-10 text-3xl lg:text-5xl'>
          More <span className='text-just font-bold'>Expertise</span>
        </h1>
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
        </div>
      </main>
      <CallUs />
    </>
  );
};

export default Home;
