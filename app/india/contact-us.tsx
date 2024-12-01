import React from 'react'
import './contact-us.css';
import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import { ContactUsForm } from '@/components/ui/contact-us-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Learn about MG Photography's journey, passion, and commitment to capturing beautiful moments in Dubai and UAE.",
  alternates: {
    canonical: '/#contact-us'
  }
}

const ContactUs = () => {
  return (
    <section id='contact-us'>
    <div className='contact-us-section my-5 py-5'>
        <div className="container">
        <div className="row mb-5">
            <h1 className='text-center mb-3'>Contact Us Today for Your Dream Photoshoot!</h1>
            <p className='text-center'>Visit our studio in India, Abu Dhabi, or Sharjah for a consultation!</p>
        </div>
        <div className="row">
            <div className="col-lg-7">
            <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/DrDB6vitvyw?si=V0_jsOcKMlWnCq-G"
        thumbnailSrc="https://i.ytimg.com/vi/DrDB6vitvyw/maxresdefault.jpg"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="top-in-bottom-out"
        videoSrc="https://www.youtube.com/embed/DrDB6vitvyw?si=V0_jsOcKMlWnCq-G"
        thumbnailSrc="https://i.ytimg.com/vi/DrDB6vitvyw/maxresdefault.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
    <div className="row mt-3 w-100 mx-auto d-flex justify-content-between contact-us-details">
    <div className="col-lg-4 about-us-details h-100 rounded d-flex flex-column justify-content-center align-items-center">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
    <p className="mail mt-3 mb-0">mgphotographyae@gmail.com</p>
    </div> 
    <div className="col-lg-4 about-us-details rounded d-flex flex-column justify-content-center align-items-center">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg>    
    <p className="mobile mt-3 mb-0">+91 73730 31924</p>
    </div> 
    <div className="col-lg-4 about-us-details rounded d-flex flex-column justify-content-center align-items-center">
    <svg  xmlns="http://www.w3.org/2000/svg"  width="28"  height="28"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" /></svg>
    <p className="location mt-3 mb-0">Thanjavur, India</p>
    </div> 
</div>



            </div>
            <div className="col-lg-5">
                <ContactUsForm/>
            </div>
        </div>
        </div>
    </div>
    </section>
  )
}

export default ContactUs

