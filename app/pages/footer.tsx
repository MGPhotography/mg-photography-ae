import React from 'react';
import './footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
            <h6 className='mb-3'><Image src="/images/mg_brand_Light.png" width={150}    // Example fixed width (adjust as necessary)
    height={60} className='w-25' alt="" /></h6>
            <p className="text-left pe-5 footer-desc">
              Capture life finest moments with MG Photography. Explore stunning galleries, professional photography services, and personalized packages for weddings, events, portraits, and more. Let us tell your story through our lens!
              </p>
            </div>


            <div className="col-xs-6 col-md-6">
              <h6 className='mb-3'>Quick Links</h6>
              <ul className="footer-links">
                <li className='mb-2'><a href="#mg-home">Home</a></li>
                <li className='mb-2'><a href="#about-us">About Us</a></li>
                <li className='mb-2'><a href="#our-services">Services</a></li>
                <li className='mb-2'><a href="#contact-us">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12 d-flex align-items-center">
              <p className="copyright-text">
                Copyright &copy; 2024 Design and Developed By <a href="#">Gunal Designs</a>
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="social d-flex justify-content-center align-items-center" href="https://wa.me/+917373031924?text=Hello%20there!" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                  </a></li>
                <li><a className="social d-flex justify-content-center align-items-center" href="mailto:mgphotographyae@gmail.com?subject=Hello&body=I%20would%20like%20more%20information" target="_blank"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-gmail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" /><path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" /><path d="M16 4l-4 4l-4 -4" /><path d="M4 6.5l8 7.5l8 -7.5" /></svg></a></li>
                <li><a className="social d-flex justify-content-center align-items-center" href="https://www.instagram.com/mgphotography.in/" target='_blank'><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
