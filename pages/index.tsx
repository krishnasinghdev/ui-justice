import type { NextPage } from 'next';
import Hero from '../components/Hero';
import { RiSuitcaseLine } from 'react-icons/ri';
import { BsPeople } from 'react-icons/bs';
import { HiOutlineChatAlt2 } from 'react-icons/hi';
import { ImTarget } from 'react-icons/im';
const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <main className='bg-[#37373F] py-[8rem] grid lg:grid-cols-2 lg:justify-items-center  px-[2rem] xl:px-[8rem] gap-6'>
        <div>
          <h1 className='text-5xl mb-4 font- text-white'>
            Our <span className='text-just font-extrabold'>Practice Areas</span>
          </h1>
          <p className='text-gray-300 py-2'>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <button className='bg-just rounded-full text-white font-semibold py-2 px-4 mt-8'>
            LEARN MORE
          </button>
        </div>
        <div>
          <div className='flex gap-4 mb-4'>
            <p className='inline-block bg-[#5F5F65] self-center rounded-full p-4'>
              <RiSuitcaseLine className='text-white text-2xl ' />
            </p>
            <div>
              <h2 className='text-just font-semibold text-lg'>
                Banking and Finance Law
              </h2>
              <p className='text-gray-300 '>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className='flex gap-4 mb-4'>
            <p className='inline-block bg-[#5F5F65] self-center rounded-full p-4'>
              <BsPeople className='text-white text-2xl ' />
            </p>
            <div>
              <h2 className='text-just font-semibold text-lg'>
                Commercial Law
              </h2>
              <p className='text-gray-300 py-1'>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className='flex gap-4 mb-4'>
            <p className='inline-block bg-[#5F5F65] self-center rounded-full p-4'>
              <HiOutlineChatAlt2 className='text-white text-2xl ' />
            </p>
            <div>
              <h2 className='text-just font-semibold text-lg'>Corporate Law</h2>
              <p className='text-gray-300 py-1'>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
          <div className='flex gap-4 mb-4'>
            <p className='inline-block bg-[#5F5F65] self-center rounded-full p-4'>
              <ImTarget className='text-white text-2xl ' />
            </p>
            <div>
              <h2 className='text-just font-semibold text-lg'>Criminal Law</h2>
              <p className='text-gray-300 py-1'>
                Far far away, behind the word mountains, far from the countries
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
