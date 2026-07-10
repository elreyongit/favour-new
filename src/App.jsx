import  {useEffect} from 'react'
import Nav from './pages/Nav'
import Body from './pages/Body'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Experience from './pages/Experience'
import Success from './pages/Success'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import About from './pages/About'
import Credentials from './pages/Credentials'
import NotFound from './pages/404Page'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { gsap } from 'gsap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    gsap.to('.animated-background', {
      backgroundPosition: '400% 0%',
      duration: 10,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='animated-background h-screen w-full'>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path='/services' element={<Services />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/success' element={<Success />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/credentials' element={<Credentials />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App