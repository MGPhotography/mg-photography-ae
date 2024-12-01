"use client";

import React from 'react'
import './FAQ.css';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
   
const FAQ = () => {
  return (
    <div className="relative flex h-[100%] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background faq-section">
    <div className='container'>
        <div className="row mb-5">
            <h1 className='text-center mb-3'>Your Questions Answered</h1>
            <p className='text-center'>Find quick solutions and insights to common queries.</p>
        </div>
        <div className="col-lg-6 col-md-10 col-sm-12 px-3 mx-auto">
        <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Do you offer destination photography services?</AccordionTrigger>
        <AccordionContent>
        Yes, we specialize in destination shoots and are available to travel internationally to capture your precious moments.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What type of photography services do you provide?</AccordionTrigger>
        <AccordionContent>
        We offer a range of services including weddings, engagements, baby shoots, portraits, and corporate events.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do you ensure high-quality photos for international clients?</AccordionTrigger>
        <AccordionContent>
        We use state-of-the-art equipment and editing techniques to deliver stunning, high-resolution images. We also collaborate with local experts to understand cultural nuances.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Can we customize the photography packages?</AccordionTrigger>
        <AccordionContent>
        Absolutely! Our packages are flexible and tailored to suit your specific needs and preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>How do we book a shoot with you from abroad?</AccordionTrigger>
        <AccordionContent>
        You can book online through our website or contact us via email. We also offer virtual consultations to discuss your requirements in detail.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
        </div>
    </div>
     
    </div>
    
  )
}

export default FAQ
