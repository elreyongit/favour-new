import { BsBrowserEdge } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import Star2 from '../assets/star-2.png';
import { CiTwitter } from 'react-icons/ci';
import Star from '../assets/star.png';
import { useNavigate } from 'react-router-dom';
import Signature from '../assets/signature.png';
import { useSEO } from '../utils/SEO';

const Services = () => {
  const navigate = useNavigate();

  useSEO({
    title: 'Web & Web3 Development Services | Favour Okafor',
    description: 'Professional web development and Web3/blockchain development services from Favour Okafor. Responsive websites, dApps, and decentralized solutions tailored to your needs.',
    keywords: 'web development services, web3 development, blockchain services, dApp development, decentralized applications, responsive websites',
    ogUrl: 'https://favourokafor.cv/services',
    canonical: 'https://favourokafor.cv/services'
  });

  // Shared handler so clickable "cards" are keyboard accessible too
  const goTo = (path) => ({
    role: 'button',
    tabIndex: 0,
    onClick: () => navigate(path),
    onKeyDown: (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigate(path);
      }
    },
  });

  return (
    <main className="lg:px-24 md:px-20 px-6 lg:pt-28 pb-8 w-full flex lg:flex-row flex-col gap-8">
      <section className="w-full flex lg:flex-row md:flex-row flex-col gap-4">
        <aside className="bg-dark-favour rounded-3xl px-10 lg:w-1/3 md:w-1/3 w-full flex flex-col  gap-6 py-16 my-auto">
          <div className="flex items-center gap-4">
            <BsBrowserEdge className="text-2xl" aria-hidden="true" />
            <p className="text-lg font-bold">Web Development</p>
          </div>

          <div className="flex items-center gap-4">
            <SiHiveBlockchain className="text-2xl" aria-hidden="true" />
            <p className="text-lg font-bold">Web3 Development</p>
          </div>
        </aside>

        <div className="lg:w-2/3 md:w-2/3 w-full lg:p-6 md:p-4">
          <div className="flex items-center justify-center">
            <img src={Star2} alt="" aria-hidden="true" className="lg:w-20 lg:h-10 md:w-8 md:h-8 w-5 h-5 object-contain" />
            <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-center">MY OFFERINGS</h1>
            <img src={Star2} alt="" aria-hidden="true" className="lg:w-20 lg:h-10 md:w-8 md:h-8 w-5 h-5 object-contain" />
          </div>

          <div className="bg-dark-favour rounded-3xl p-6 mt-4 grid lg:grid-cols-2 w-full gap-8">
            <article className="p-6 rounded-3xl bg-zinc-800">
              <h2 className="font-semibold mb-4 text-lg">WEB DEVELOPMENT</h2>
              <p className="text-justify text-sm leading-loose">
                Looking for a professional and modern online presence? I specialize in creating dynamic, user-friendly, and responsive websites tailored to your unique needs. Whether you&apos;re a business owner, entrepreneur, or creative professional, I&apos;ll build a website that not only looks great but also delivers an exceptional user experience.
              </p>
            </article>

            <article className="p-6 rounded-3xl bg-zinc-800">
              <h2 className="font-semibold mb-4 text-lg">WEB3 DEVELOPMENT</h2>
              <p className="text-justify text-sm leading-loose">
                The future of the web is here, and I&apos;m here to help you build it. With expertise in blockchain technology and decentralized applications, I specialize in developing Web3 solutions that empower businesses and creators to thrive in the decentralized world.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="let_work_together flex gap-6 lg:flex-row md:flex-row flex-col lg:-mt-10 mt-0" data-aos="zoom-in">
        <article
          className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full flex flex-col justify-between lg:gap-20 md:gap-3 gap-28 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="View my social profiles"
          {...goTo('/contact')}
        >
          <div className="bg-zinc-800 rounded-full justify-center p-3 flex gap-4">
            <BsBrowserEdge className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 hover:bg-white hover:text-black transition-colors" aria-hidden="true" />
            <CiTwitter className="lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 hover:bg-white hover:text-black transition-colors" aria-hidden="true" />
          </div>

          <div className="services-offering flex items-center justify-between px-5">
            <div>
              <p className="text-sm text-gray-400 font-medium">STAY WITH ME</p>
              <p className="text-xl font-semibold">Profiles</p>
            </div>
            <div className="flex justify-end">
              <img src={Star} alt="" aria-hidden="true" className="w-1/2 filter invert h-1/2 object-cover" />
            </div>
          </div>
        </article>

        <div className="bg-dark-favour rounded-3xl lg:w-2/4 md:w-2/4 w-full p-6 flex items-center">
          <p className="lg:text-6xl md:text-6xl text-4xl lg:w-3/4 md:w-3/4 w-full">
            Let&apos;s work <span className="text-blue-800">together.</span>
          </p>
        </div>

        <article
          className="bg-dark-favour p-2 rounded-3xl lg:w-1/4 md:w-1/4 w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="View my credentials"
          {...goTo('/credentials')}
        >
          <div>
            <img src={Signature} alt="" aria-hidden="true" className="filter invert w-1/2 mx-auto my-6" />
          </div>
          <div className="more-about flex items-center justify-between px-5">
            <div>
              <p className="text-sm text-gray-400 font-medium">MORE ABOUT ME</p>
              <p className="text-xl font-semibold">Credentials</p>
            </div>
            <div className="flex justify-end">
              <img src={Star} alt="" aria-hidden="true" className="w-1/2 filter invert h-1/2 object-cover" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Services;