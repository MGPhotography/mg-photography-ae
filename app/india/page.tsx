"use client";

import AboutUs from "./about-us";
import { AiFeature } from "./ai-feature";
import { BackgroundBeamsWithCollisionDemo } from "./background-beams";
import Blogs from "./blogs";
import ContactUs from "./contact-us";
import FAQ from "./FAQ";
import Footer from "./footer";
import { IpadScroll } from "./ipad-scroll";
import Navbar from "./navbar";
import Ourservices from "./our-services";
import { Pricing } from "./pricing";
import { Testimonials } from "./testimonials";



export default function India() {
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
  );
}