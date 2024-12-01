/* eslint-disable react/no-children-prop */
import React from 'react'
import { BackgroundBeamsWithCollisionDemo } from './pages/background-beams'
import { IpadScroll } from './pages/ipad-scroll'
import AboutUs from './pages/about-us'
import Ourservices from './pages/our-services'
import { Testimonials } from './pages/testimonials'
import ContactUs from './pages/contact-us'
import FAQ from './pages/FAQ'
import Footer from './pages/footer'
import { Pricing } from './pages/pricing'
import { AiFeature } from './pages/ai-feature'
import Blogs from './pages/blogs'
import Navbar from './india/navbar'

const Pages = () => { 
  return (
    <div>
      <Navbar/>
      <BackgroundBeamsWithCollisionDemo />
      <AboutUs />
      <Ourservices/>
      <AiFeature/>
      <IpadScroll />
      <Pricing/>
      <Testimonials/>
      <ContactUs/>
      <Blogs/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Pages
