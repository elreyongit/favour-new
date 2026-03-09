import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'
import portfolio6 from '../assets/portfolio6.png'
import portfolio7 from '../assets/portfolio7.png'
import portfolio8 from '../assets/portfolio8.png'
import portfolio9 from '../assets/portfolio9.png'
import portfolio10 from '../assets/portfolio10.png'
import portfolio11 from '../assets/portfolio11.jpg'
import portfolio12 from '../assets/portfolio12.png'
import portfolio13 from '../assets/portfolio13.png'
import portfolio14 from '../assets/portfolio14.png'
import portfolio15 from '../assets/portfolio15.png'
import portfolio16 from '../assets/portfolio16.png'
import Star2 from '../assets/star-2.png';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 12,
      image: portfolio12,
      githubUrl: "https://github.com/fahyvor",
      siteUrl: "https://sterling-frontend.onrender.com/",
      animation: "zoom-in"
    },
    {
      id: 14,
      image: portfolio14,
      githubUrl: "https://github.com/Fahyvor/sleek-toast",
      siteUrl: "https://www.npmjs.com/package/sleek-toast",
      animation: "zoom-in"
    },
    {
      id: 13,
      image: portfolio13,
      githubUrl: "https://github.com/fahyvor",
      siteUrl: "https://bumasel.com/",
      animation: "zoom-out"
    },
    {
      id: 16,
      image: portfolio16,
      githubUrl: "https://github.com/Fahyvor/url-shortner-ui",
      siteUrl: "https://url-shortner-mbwh.onrender.com/",
      animation: "flip-left"
    },
    {
      id: 15,
      image: portfolio15,
      githubUrl: "https://github.com/Fahyvor/trading-signal-app",
      siteUrl: "https://alpha-pulse.onrender.com",
      animation: "zoom-in"
    },
    {
      id: 1,
      image: portfolio1,
      githubUrl: 'https://github.com/Fahyvor/city-wide/',
      siteUrl: 'https://city-wide-q6gz.onrender.com',
      animation: 'zoom-out'
    },
    {
      id: 2,
      image: portfolio2,
      githubUrl: 'https://github.com/Fahyvor/frontend-homly/',
      siteUrl: 'https://homly-frontend-eight.vercel.app/',
      animation: 'zoom-in'
    },
    {
      id: 3,
      image: portfolio3,
      githubUrl: 'https://github.com/Fahyvor/flexysub-frontend/',
      siteUrl: 'https://flexysub.ng/',
      animation: 'flip-left'
    },
    {
      id: 4,
      image: portfolio4,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://speedupcreative.onrender.com/',
      animation: 'zoom-out-up'
    },
    {
      id: 5,
      image: portfolio5,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://tech19.onrender.com/',
      animation: 'flip-right'
    },
    {
      id: 6,
      image: portfolio6,
      githubUrl: 'https://github.com/Fahyvor/cmonlineradio/',
      siteUrl: 'https://cmonlineradio.vercel.app/',
      animation: 'zoom-out-down'
    },
    {
      id: 7,
      image: portfolio7,
      githubUrl: 'https://github.com/Fahyvor/favour',
      siteUrl: 'https://favour-plum.vercel.app/',
      animation: 'flip-right'
    },
    {
      id: 8,
      image: portfolio8,
      githubUrl: 'https://github.com/Fahyvor',
      siteUrl: 'https://doncodes-tech.vercel.app/',
      animation: 'flip-down'
    },
    {
      id: 9,
      image: portfolio9,
      githubUrl: 'https://github.com/Fahyvor/PublicVersion',
      siteUrl: 'https://imponexpo-first-public-version.vercel.app/help',
      animation: 'fade-down-right'
    },
    {
      id: 10,
      image: portfolio10,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://accesstojustice.legum.tech',
      animation: 'flip-left'
    },
    {
      id: 11,
      image: portfolio11,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://t.me/sushimonsta_bot',
      linkText: 'Check Out The Bot',
      isSpecial: true, // for the different height class
      animation: 'flip-left'
    }
  ];

  return (
    <div className='w-full px-24 mt-8 max-sm:px-10 pt-28 pb-6 bg-black'>
      <div className='flex items-center justify-center'>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
        <p className="lg:text-7xl md:text-6xl text-4xl font-bold">PORTFOLIO</p>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
      </div>

      <div className='portfolio_images_links mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:pl-7 max-sm:grid-cols-1 gap-6'>
        {portfolioItems.map((item) => (
          <div 
            key={item.id}
            className='p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' 
            data-aos={item.animation}
          >
            <div className={`rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour hover:drop-shadow-lg ${item.isSpecial ? 'h-48' : ''}`}>
              <img src={item.image} alt={`Portfolio ${item.id}`} className={item.isSpecial ? '' : 'object-cover rounded-xl'} />
            </div>

            <div className='px-3 flex gap-3'>
              <a href={item.githubUrl} className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
              <a href={item.siteUrl} className='' target="_blank" rel="noopener noreferrer">
                {item.linkText || 'Check Out The Site'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='portfolio_order bg-pink-700 w-[20%] mt-8 rounded-full text-white text-center font-semibold my-4 tracking-wider py-1 mx-auto md:w-[35%] max-sm:w-1/2'>
        <a href='mailto:favourokafor30@gmail.com'>Start your project</a>
      </div>
    </div>
  )
}

export default Portfolio