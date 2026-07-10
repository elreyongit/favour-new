import Fahyvor from '../assets/ME.png';
import worksThumnail from '../assets/portfolio14.png';
import Signature from '../assets/signature.png';
import Star from '../assets/star.png';
import Logo from '../assets/elreyLogo.png';
import WebIcon from '../assets/webIcon.jpg';
import Web3Icon from '../assets/web3Icon.png';
import { FaCode } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { CiTwitter } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../utils/SEO';

const Body = () => {
  useSEO({
    title: 'Full-Stack Web & Blockchain Developer | Solidity Expert | DeFi Solutions - Favour Okafor',
    description: 'Favour Okafor - Full Stack Software Engineer specializing in React, Next.js, TypeScript, Node.js, Express, Django, PostgreSQL, AWS and Solidity. Building scalable web applications, APIs and blockchain solutions.',
    keywords: 'blockchain developer, web3 developer, solidity, DeFi, smart contracts, ethereum, web3, dApps, blockchain security, cryptocurrency, full-stack development, react, next.js, typescript, node.js, express, django, postgresql, aws, devops, software engineering, software development, software architecture, software design patterns, software testing, software deployment, software maintenance, software optimization, software scalability, software performance, software security, software best practices',
    ogImage: 'https://favourokafor.cv/og-image.png',
    ogUrl: 'https://favourokafor.cv/',
    canonical: 'https://favourokafor.cv/'
  });

  const navigate = useNavigate();

  return (
    <div className='bg-black w-full lg:px-16 md:px-12 px-5 pb-6'>
      <div className="w-full lg:flex-row pt-20 flex md:flex-row lg:mb-0 mb-5">
        <div className="marquee w-full rounded-full overflow-hidden whitespace-nowrap bg-dark-favour p-3 px-4">
            <p className='text-sm animate-marquee'>
              FULL-STACK DEVELOPMENT | FRONTEND ENGINEERING | BACKEND DEVELOPMENT | WEB APPLICATIONS | REST APIs | RESPONSIVE DESIGN | NEXT.JS | REACT | NODE.JS | TYPESCRIPT | POSTGRESQL | CLOUD DEPLOYMENT | SYSTEM DESIGN | PERFORMANCE OPTIMIZATION | SOFTWARE ENGINEERING |
            </p>
          </div>
      </div>

      <header className="body flex gap-8 w-full lg:flex-row md:flex-row flex-col pb-0 lg:pb-4 items-stretch h-full mt-0" data="aos" data-aos="zoom-in">
        <section className=' body-left rounded-b-xl rounded-t-xl lg:w-1/2 md:w-1/2 w-full flex-col justify-center flex items-stretch min-w-0 mt-0'>
          <article className="body-left-image-and-text flex lg:flex-row md:flex-row flex-col items-center lg:gap-6 md:gap-4 gap-8 lg:px-12 md:px-4 px-5 rounded-3xl lg:py-10 pt-0 bg-dark-favour">
            <figure className="body-left-image rounded-tl-3xl rounded-br-3xl flex md:w-[18rem] lg:h-[15rem] md:h-[15rem] h-[20rem] overflow-hidden w-full">
              <img 
                src={Fahyvor} 
                alt="Favour Okafor - Blockchain Developer & Web3 Researcher" 
                className='object-cover'
                loading="eager"
              />
            </figure>
            <div className="body-left-text">
              <p className='text-sm text-gray-400'>BLOCKCHAIN & WEB3 DEVELOPER</p>
              <h1 className='text-3xl font-bold'>Favour Okafor</h1>
              <p className='text-md'>Expert in Solidity, DeFi, and decentralized application development. Building the future of blockchain technology.</p>
            </div>
          </article>
        </section>

        <section className="body-right lg:w-1/2 md:w-1/2 w-full flex flex-col gap-1 mt-0 ">
          {/* <div className="marquee rounded-full overflow-hidden whitespace-nowrap bg-dark-favour p-3 px-4">
            <p className='text-sm animate-marquee'>| BLOCKCHAIN PROJECTS | SMART CONTRACTS | WEB3 SOLUTIONS | DEFI DEVELOPMENT | BLOCKCHAIN PROJECTS | SMART CONTRACTS | WEB3 SOLUTIONS | DEFI DEVELOPMENT |</p>
          </div> */}
          <div className="flex lg:flex-row md:flex-row flex-col gap-6 py-5">
            <article className="bg-dark-favour p-2 rounded-3xl lg:w-1/2 md:w-1/2 w-full flex flex-col justify-center cursor-pointer" onClick={() => navigate('/credentials')}>
              <div className="">
                <img src={Signature} alt="Credentials - Experience and qualifications" className='filter invert w-1/2 mx-auto my-6' /> 
              </div>
              <div className="more-about flex items-center justify-between px-5 ">
                <div className="">
                  <p className='text-sm text-gray-400 font-medium'>MORE ABOUT ME</p>
                  <h2 className='text-xl font-semibold'>Credentials</h2>
                </div>
                <div className=" flex justify-end">
                  <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
                </div>
              </div>
            </article>

            <article className="bg-dark-favour p-2 lg:w-1/2 md:w-1/2 w-full rounded-3xl flex flex-col gap-7 py-5 cursor-pointer" onClick={() => (navigate('/portfolio'))}>
              <div className="flex flex-col items-center py-3">
                <p className='text-4xl opacity-40 font-bold text-white'>MY WORKS</p>
                <img src={worksThumnail} alt="Featured blockchain and web3 projects portfolio" className='w-5/6 z-40 rounded-tl-xl rounded-br-xl'/>
              </div>
              <div className="flex justify-between items-center px-5">
                <div className="">
                  <p className='text-sm text-gray-400 font-medium'>SHOWCASE</p>
                  <h2 className='text-xl font-semibold'>Projects</h2>
                </div>
                <div className="flex justify-end">
                  <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
                </div>
              </div>
            </article>
          </div>
        </section>
      </header>

      <section className="body-middle flex lg:flex-row md:flex-row flex-col gap-6 mt-0" data="aos" data-aos="fade-up">
        <article className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-6 w-full">
          <div className="flex p-6 justify-center items-center">
            <img src={Logo} alt='Elrey Technologies Logo' className='filter invert object-contain lg:w-full md:w-full w-1/2' />
          </div>
        </article>

        <article className="bg-dark-favour rounded-3xl lg:w-2/4 md:w-2/4 w-full p-6 flex flex-col gap-4 justify-between cursor-pointer" onClick={() => navigate('/services')}>
          <div className="flex justify-center gap-8 w-full py-6 items-center">
            <img src={WebIcon} alt='Web Development Services' className="filter invert lg:w-28 md:w-28 w-12 object-contain" />
            <img src={Web3Icon} alt='Web3 Development Services' className='filter invert lg:w-28 md:w-28 w-12 object-contain' />
            <FaCode className='lg:w-16 md:w-16 w-8 lg:h-16 md:h-16 h-8'/>
          </div>
          <div className="services-offering flex items-center justify-between px-5 ">
            <div className="">
              <p className='text-sm text-gray-400 font-medium'>SPECIALIZATION</p>
              <h2 className='text-xl font-semibold'>Services Offering</h2>
            </div>
            <div className=" flex justify-end">
              <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
            </div>
          </div>
        </article>

        <article className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full py-7 flex flex-col justify-between lg:gap-3 md:gap-3 gap-28" onClick={() => navigate('/contact')}>
          <div className="bg-zinc-800 rounded-full justify-center p-3 flex gap-4">
            <BsBrowserEdge className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black'/>
            <CiTwitter className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black' />
          </div>
          <div className="services-offering flex items-center justify-between px-5 ">
            <div className="">
              <p className='text-sm text-gray-400 font-medium'>STAY WITH ME</p>
              <h2 className='text-xl font-semibold'>Profiles</h2>
            </div>
            <div className=" flex justify-end">
              <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
            </div>
          </div>
        </article>
      </section>

      <section className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-3 gap-8 py-6 mt-0" data="aos" data-aos="zoom-in">
        <article className="bg-dark-favour rounded-3xl lg:w-1/2 md:w-1/2 w-full p-6 flex lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-3 gap-11">
          <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
            <p className="text-4xl font-bold">{new Date().getFullYear() - 2021}</p>
            <span className='font-bold opacity-40 text-sm'>YEARS OF EXPERIENCE</span>
          </div>

          <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
            <p className="text-4xl font-bold">10+</p>
            <p className='font-bold opacity-40 text-sm'>CLIENTS WORLDWIDE</p>
          </div>

          <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
            <p className="text-4xl font-bold">20+</p>
            <p className='font-bold opacity-40 text-sm'>PROJECTS DELIVERED</p>
          </div>
        </article>

        <article className="bg-dark-favour rounded-3xl lg:w-1/2 md:w-1/2 w-full p-6">
          <p className='lg:text-6xl md:text-6xl text-3xl lg:w-3/4 md:w-3/4 w-full'>Let&apos;s build <span className='text-blue-800'>together.</span></p>
        </article>
      </section>
    </div>
  );
};

export default Body;
