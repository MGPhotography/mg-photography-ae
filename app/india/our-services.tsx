/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react'
import './our-services.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services",
  description: "Learn about MG Photography's journey, passion, and commitment to capturing beautiful moments in Dubai and UAE.",
  alternates: {
    canonical: '/#our-services'
  }
}

const Ourservices = () => {
  return (
    <section id='our-services'>
    <div className='our-services-section container py-5'>
        <div className="row mb-5">
            <h1 className='text-center mb-3'>What We Will Do</h1>
            <p className='text-center mb-0'>Offering tailored solutions to empower your journey.</p>
        </div>
        <div className="row why-us-grid h-100 mx-auto">
      <div className="col-lg-4 col-sm-12 why-us-card p-4">
      <img src="/images/Memories.svg" alt="" className="mt-3 mb-5"/>        
      <div className="row">
          <h1 className="whyus-title">
          Moments, Memories, Forever
          </h1>
          <p className="whyus-desc mb-0">
          Preserve your special moments with stunning photography that lasts a lifetime.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 why-us-card p-4">
      <img src="/images/Porttrait.svg" alt="" className="mt-3 mb-5"/>        
      <div className="row">
          <h1 className="whyus-title">
          Portraits That Speak
          </h1>
          <p className="whyus-desc mb-0">
          Capture your personality with custom, story-driven portraits.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 why-us-card p-4">
      <img src="/images/Baby.svg" alt="" className="mt-3 mb-5"/>        
      <div className="row">
          <h1 className="whyus-title">
          First Steps Framed
          </h1>
          <p className="whyus-desc mb-0">
          Create lasting memories of your baby’s milestones with expert photography.
          </p>
        </div>
      </div>
    </div>
      
    </div>
    </section>
  )
}


export default Ourservices
