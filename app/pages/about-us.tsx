"use client";

import React from 'react'
import './about-us.css';
import { AnimatedListDemo } from './about-us-list';
import { Metadata } from 'next';
// Example for about page
export const metadata: Metadata = {
  title: "About MG Photography | Our Story and Vision",
  description: "Learn about MG Photography's journey, passion, and commitment to capturing beautiful moments in Dubai and UAE.",
  alternates: {
    canonical: '/#about-us'
  }
}
const AboutUs = () => {
  return (
    <section id='about-us'>
    <div className='container py-5 about-us-section'>
      <div className="row about-us-row w-100 h-100 py-4 rounded-4 px-1">
        <div className="col-lg-6 px-5">
            <div className="row">
            <p className='About-Us-Tagline'>ABOUT US</p>
            <h1 className='About-Us-Heading'>Bringing Your Vision to Life with High-Quality Photography</h1>
            <p className='About-Us-Desc mt-3'>At MG Photography, we specialize in capturing life’s most memorable moments with artistry and precision. As one of the best photography services in all countries. We bring a unique blend of creativity, passion, and professionalism to each session. Whether it’s your wedding day, a family portrait, or a special event, we go above and beyond to deliver timeless images you’ll cherish forever. Our team focuses on delivering high-quality portrait photography, event photography, and commercial photography with personalized service tailored to every client’s vision. Let us turn your precious memories into stunning photographs that tell your story beautifully.</p>
            </div>
            <button className='enquireNow mt-5' onClick={() => {
    const contactForm = document.getElementById('contact-us');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  }}>Enquire Now <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg></button>
        </div>
        <div className="col-lg-6 p-0 animated-list-container">
          <AnimatedListDemo />
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutUs
