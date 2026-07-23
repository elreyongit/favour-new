import { FaFacebookF, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'
import { MdOutlineEmail } from 'react-icons/md'
import { FaGithub } from "react-icons/fa6";
import {useState} from 'react';
// import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    uers_name: "",
    user_email: "",
    message: "",
    from_name: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .send(
        "fahyvor",      
        "template_6djgdrq",
        formData,
        "-yN7kZkt6uAbygR4I" 
      )
      .then(
        () => {
          toast.success("Message Sent Successfully!");
        },
        () => {
          toast.error("An error occurred, please try again.");
        }
      ).finally(() => {
        setSending(false);
        setFormData({
          uers_name: "",
          user_email: "",
          message: "",
          from_name: "",
        });
      });
  };

  return (
    <div className='lg:px-20 md:px-10 px-6 lg:pt-28 md:pt-28 pt-3 pb-6'>
      <div className='toastify-message'>
        <ToastContainer />
      </div>
      <div className="w-full flex lg:flex-row md:flex-row flex-col gap-7">
        <div className='flex flex-col lg:w-1/3 md:w-1/3 w-full gap-8 mt-8 max-sm:gap-8'>
        <p className='uppercase text-xl font-semibold'>Contact Info</p>
          <a href="mailto:favourokafor30@gmail.com" target="_blank" className='flex gap-4 items-center'>
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <MdOutlineEmail size={20}  color='white'/>
            </div>

            <div>
              <h2 className='font-semibold tracking-wider'>Send a Message</h2>
            </div>
            
          </a>

          <a href="https://www.linkedin.com/in/fahyvor/" className='flex gap-4 items-center'> 
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <FaLinkedin size={20} color='white' />
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>LinkedIn Handle</h2>
              {/* <small>Elrey</small> */}
            </div>
          </a>

          <a href="https://www.github.com/fahyvor" className='flex gap-4 items-center'> 
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <FaGithub size={20} color='white' />
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>Github Handle</h2>
              {/* <small>Elrey</small> */}
            </div>
          </a>

          <a href="https://twitter.com/iamfavour3" className='flex gap-4 items-center'> 
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <IoLogoTwitter size={20} color='white' />
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>Twitter Handle</h2>
              {/* <small>Elrey</small> */}
            </div>
          </a>

          <a href="https://api.whatsapp.com/send/?phone=2349072033837&text&type=phone_number&app_absent=0" target="_blank" className='flex gap-4 items-center'> 
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <FaWhatsapp size={20} color='white' />
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>Whatsapp Handle</h2>
              {/* <small>Elrey</small> */}
            </div>
          </a>

          <a href="https://facebook.com/fahyvor" className='flex gap-4 items-center'> 
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <FaFacebookF size={20}  color='white'/>
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>Facebook Handle</h2>
              {/* <small>Favour Okafor Snr</small> */}
            </div>
          </a>

          <a href="https://instagram.com/fahyvor" className='flex gap-4 items-center'>
            <div className='bg-dark-favour rounded-2xl p-3 drop-shadow-lg flex justify-center items-center border-1'>
              <FiInstagram size={20} color='white'/>
            </div>
            <div>
              <h2 className='font-semibold tracking-wider'>Instagram Handle</h2>
              {/* <p></p> */}
            </div>
          </a>

          
        </div>

        <div className="lg:w-3/4 md:w-3/4 w-full bg-dark-favour rounded-3xl lg:p-12 md:p-8 p-6 mt-0">
            <p className='lg:text-5xl md:text-5xl text-4xl lg:w-3/4 md:w-3/4 w-full'>Let&apos;s work <span className='text-blue-800'>together.</span></p>

            <form className='flex flex-col gap-6 py-8' onSubmit={sendEmail}>
              <input type='text' name="user_name" value={formData.user_name} onChange={handleChange} className='p-3 rounded-lg bg-zinc-800' placeholder='Name *'/>
              <input type='email' name="user_email" value={formData.user_email} onChange={handleChange} className='p-3 rounded-lg bg-zinc-800' placeholder='Email *'/>
              <input type='text' name='from_name' value={formData.from_name} onChange={handleChange}  className='p-3 rounded-lg bg-zinc-800' placeholder='Your Subject *'/>
              <textarea rows="7" name="message" value={formData.message} onChange={handleChange} className='p-3 rounded-lg bg-zinc-800 h-64' placeholder='Your Message *'/>

              <button className='bg-zinc-800 p-2 rounded-lg hover:bg-white hover:text-zinc-800 cursor-pointer' disabled={sending}>{sending ? "Sending..." : "Send Message"}</button>
            </form>

        </div>
      </div>
    </div>
  )
}

export default Contact