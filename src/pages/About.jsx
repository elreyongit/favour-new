import Favour from '../assets/ME.png';
import { CiTwitter } from 'react-icons/ci';
import Star from '../assets/star.png';
import { BsBrowserEdge } from "react-icons/bs";
import Signature from '../assets/signature.png';
import Star2 from '../assets/star-2.png';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../utils/SEO';

const experiencesArray = [
  {
    date: "October 2024 - Till date",
    organization: "Djeffs Source, Lagos State, Nigeria",
    position: "FullStack Developer"
  },
  {
    date: "March 2025 - Till date",
    organization: "Elrey Technologies, F.C.T, Nigeria",
    position: "Creative Director"
  },
  {
    date: "February, 2025 - Apr. 2026",
    organization: "Courtney Sessions, U.S.A",
    position: "FullStack Developer"
  },
  {
    date: "May 2024 - Jan. 2025",
    organization: "Legum Limited, F.C.T, Abuja, Nigeria",
    position: "Frontend Developer"
  },
  {
    date: "July 2024",
    organization: "Tech4Dev, Abia State, Nigeria",
    position: "Tech Instructor"
  },
  {
    date: "February - April 2024",
    organization: "Ashnity Synergy Limited, Abuja, F.C.T Nigeria",
    position: "Full Stack Web3 Developer"
  },
  {
    date: "November 2023 - Febuary 2024",
    organization: "Homly LLC, Lagos State, Nigeria",
    position: "FullStack Developer/Team Lead"
  },
  {
    date: "July - December 2023",
    organization: "Doncodes Tech. Limited, Abia State, Nigeria",
    position: "Frontend Developer",
  },
  {
    date: "January 2020 - December 2022" ,
    organization: "Kaays Graphix, Rivers State, Nigeria",
    position: "Creative Director"
  },
  {
    date: "September 2015 - December 2022",
    organization: "Innolink Integrated Services, Rivers State, Nigeria",
    position: "Senior Graphics Designer"
  }
]


const About = () => {
    useSEO({
      title: "About Favour Okafor - Full-Stack Software Engineer",
      description:
        "Learn about Favour Okafor, a Full-Stack Software Engineer specializing in React, Next.js, Node.js, TypeScript, scalable web applications, modern backend systems, and cloud-powered solutions.",
      keywords:
        "Favour Okafor, Full-Stack Software Engineer, Full-Stack Developer, React Developer, Next.js Developer, Node.js Developer, TypeScript, JavaScript, Express.js, PostgreSQL, MongoDB, Tailwind CSS, Web Development, Software Engineer Nigeria",
      ogUrl: "https://favourokafor.cv/about",
      canonical: "https://favourokafor.cv/about",
    });

  const navigate = useNavigate();
  
  return (
    <div className="bg-black overflow-x-hidden text-white w-full lg:px-16 md:px-12 px-5 lg:pt-0 pt-2 pb-6">
      <section className="w-full">
        <article className="self_summary_container flex lg:flex-row md:flex-row flex-col lg:gap-6 md:gap-6 gap-8 w-full min-w-0" data="aos" data-aos="fade-in">
          <figure className="bg-dark-favour rounded-xl lg:w-1/4 md:w-1/4 p-6 w-full lg:h-[25rem] md:h-[18rem] h-[22rem] overflow-y-hidden flex justify-center items-center" data="aos" data-aos="zoom-in-left">
            <img src={Favour} alt="Favour Okafor - Blockchain Developer" className="object-cover rounded-xl w-full h-full" />
          </figure>

          <div className="text-white lg:w-3/4 md:w-3/4 w-full lg:p-6 md:p-6 p-0 flex flex-col lg:gap-6 md:gap-6 gap-5" data="aos" data-aos="zoom-in-right">
            <div className='flex items-center lg:gap-0 md:gap-0 gap-3 '>
              <img src={Star2} alt='decorative star' className='lg:w-20 md:w-20 w-8 lg:h-10 md:h-20 h-8 object-contain'/>
              <h1 className="lg:text-7xl md:text-6xl text-xl font-semibold">PROFESSIONAL PROFILE</h1>
              <img src={Star2} alt='decorative star' className='lg:w-20 md:w-20 w-8 lg:h-10 md:h-20 h-8 object-contain'/>
            </div>

            <article className='bg-dark-favour rounded-xl p-6'>
              <h2 className='text-2xl font-bold mb-3'>Favour Okafor</h2>
              <p className='text-justify'>Senior blockchain developer and Web3 researcher with specialized expertise in Solidity, DeFi protocols, and decentralized application architecture. I bring comprehensive experience across full-stack web development and blockchain technology, having collaborated with leading organizations in both traditional software and Web3 sectors. My research interests focus on smart contract security, DeFi innovation, and scalable blockchain solutions.</p>
            </article>
          </div>
        </article>

        <section className="experience-education-section py-4 flex lg:flex-row md:flex-row flex-col w-full gap-8 mt-0" data="aos" data-aos="zoom-out">
          <article className="bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6">
            <h2 className='text-2xl font-bold mb-6'>EXPERIENCE</h2>
            <div className="experience_container flex flex-col gap-8 mt-9">
              {experiencesArray.map((experience, index) => (
                <div className="experience_card flex flex-col" key={index}>
                  <p className="duration text-gray-500 font-medium">{experience.date}</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>{experience.organization}</p>
                  <p className='position text-gray-500'>{experience.position}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="eductation_container bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6">
            <h2 className='text-2xl font-bold mb-6'>EDUCATION & CERTIFICATIONS</h2>
            <div className="experience_container flex flex-col gap-8 mt-9">
              <div className="experience_card flex flex-col">
                <p className="duration text-gray-500 font-medium">2026</p>
                <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Smart Contract Security</p>
                <p className='position text-gray-500'>Cyfrin Updraft</p>
              </div>

              <div className="experience_card flex flex-col">
                <p className="duration text-gray-500 font-medium">2018 - 2022</p>
                <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Bachelors Degree in Computer Science</p>
                <p className='position text-gray-500'>Micheal Okpara University of Agriculture, Umudike</p>
              </div>

              <div className="experience_card flex flex-col">
                <p className="duration text-gray-500 font-medium">2022</p>
                <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Frontend Development Internship</p>
                <p className='position text-gray-500'>Side Hustle, Lagos State, Nigeria</p>
              </div>

              <div className="experience_card flex flex-col">
                <p className="duration text-gray-500 font-medium">2009 - 2015</p>
                <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>West Africa Senior School Certificate</p>
                <p className='position text-gray-500'>Total Victory College</p>
              </div>
            </div>
          </article>
        </section>

        <section className="let_work_together mt-0 flex gap-6 lg:flex-row md:flex-row flex-col" data="aos" data-aos="zoom-in">
          <article className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full py-7 flex flex-col justify-between lg:gap-20 md:gap-3 gap-28" onClick={() => navigate('/contact')}>
            <div className="bg-zinc-800 rounded-full justify-center p-3 flex gap-4">
              <BsBrowserEdge className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black'/>
              <CiTwitter className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black' />
            </div>
            <div className="services-offering flex items-center justify-between px-5 ">
              <div className="">
                <p className='text-sm text-gray-400 font-medium'>GET IN TOUCH</p>
                <h3 className='text-xl font-semibold'>Contact Me</h3>
              </div>
              <div className=" flex justify-end">
                <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
              </div>
            </div>
          </article>

          <article className="bg-dark-favour rounded-3xl lg:w-2/4 md:w-2/4 w-full p-6 mt-0">
            <p className='lg:text-6xl md:text-6xl text-4xl lg:w-3/4 md:w-3/4 w-full'>Let&apos;s build together.</p>
          </article>

          <article className="bg-dark-favour p-2 rounded-3xl lg:w-1/4 md:w-1/4 w-full">
            <div className="">
              <img src={Signature} alt="Signature" className='filter invert w-1/2 mx-auto my-6' /> 
            </div>
            <div className="more-about flex items-center justify-between px-5 ">
              <div className="">
                <p className='text-sm text-gray-400 font-medium'>CERTIFICATIONS</p>
                <h3 className='text-xl font-semibold'>Credentials</h3>
              </div>
              <div className=" flex justify-end">
                <img src={Star} alt='star icon' className='w-1/2 filter invert h-1/2 object-cover'/>
              </div>
            </div>
          </article>
        </section>
      </section>
    </div>
  );
}

export default About