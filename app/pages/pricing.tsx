/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from "@/lib/utils";
import { Spotlight } from "../../components/ui/Spotlight";
import './pricing.css';

export function Pricing() {
  return (
    <div className="pricing h-[auto] w-full px-0 rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='our-services-section container container-fluid container-lg container-xxl py-5 z-100 h-100'>
        <div className="row mb-5">
            <h1 className='text-center mb-3 head'>Affordable Premium Plans!</h1>
            <p className='text-center mb-0 sub-head'>Capture your moments effortlessly with our photography packages—tailored to suit every occasion and budget!</p>
        </div>
        <div className="row why-us-grid h-100 mx-auto">
      <div className="col-lg-4 col-sm-12 why-us-card p-4">
        <div>
        <div className="row">
        <p className="package-name mb-2">BASIC PACKAGE</p>
        <p className="price-desc">Get started with essential features at an affordable price!</p>
        </div>
        <div className="row price mt-4">
            <h1 className="price-amount">
                AED3000
            </h1>
        </div>
        <div className="row whats-included mt-4">
            <div className="whats-included-heading"><p>What&apos;s Included?</p></div>
            <div className="row points"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">4-6 hours of coverage</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">1 photographer</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Unlimited photos</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Online Gallery</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">AI Face Recognition smart photo</p></div>
        </div>
        </div>
        <div className="row w-100 mx-auto">
            <button className="book-now-btn w-100 py-3 mt-5 fw-medium" onClick={() => {
    const contactForm = document.getElementById('contact-us');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  }}>Book Now</button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 why-us-card p-4 recommended-pricing">
        <div>
        <div className="row">
        <p className="package-name mb-2">STANDARD PACKAGE</p>
        <p className="price-desc">AI and customization for smarter photo management.</p>
        </div>
        <div className="row price mt-4">
            <h1 className="price-amount">
                AED5000
            </h1>
        </div>
        <div className="row whats-included mt-4">
            <div className="whats-included-heading"><p>What&apos;s Included?</p></div>
            <div className="row points"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">8–10 Hours Coverage</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">1 Photographer + Assistant</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Unlimited photos</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Optional Pre-Wedding Shoot</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Online Gallery Access</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">USB with High-Res Images</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Premium Photo Album</p></div>
        </div>
        </div>
        <div className="row w-100 mx-auto">
        <button className="book-now-btn w-100 py-3 mt-5 fw-medium" onClick={() => {
    const contactForm = document.getElementById('contact-us');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  }}>Book Now</button>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 why-us-card p-4">
        <div>
        <div className="row">
        <p className="package-name mb-2">ELITE PACKAGE</p>
        <p className="price-desc">Get started with essential features at an Premium price!</p>
        </div>
        <div className="row price mt-4">
            <h1 className="price-amount">
                AED8000
            </h1>
        </div>
        <div className="row whats-included mt-4">
            <div className="whats-included-heading"><p>What&apos;s Included?</p></div>
            <div className="row points"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Full-Day Coverage (10–12 Hours)</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">1 Photographer + 1–2 Assistants</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Unlimited Edited Photos</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Pre-Wedding + Engagement</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Luxury Photo Album</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Online Gallery Access</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Optional Drone Coverage</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Highlight or Full Wedding Video</p></div>
            <div className="row points mt-3"><img className="points-img" src="/images/sparkles.svg" alt="pricing-point" /><p className="included-point mb-0 px-0 w-auto">Second Photographer Included</p></div>
        </div>
        </div>
        <div className="row w-100 mx-auto">
        <button className="book-now-btn w-100 py-3 mt-5 fw-medium" onClick={() => {
    const contactForm = document.getElementById('contact-us');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  }}>Book Now</button>
        </div>
      </div>
    </div>
      
    </div>
    </div>
  );
}
