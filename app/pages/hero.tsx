"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import AnimatedShinyText from "../../components/ui/animated-shiny-text";



export default function hero() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    
    <section id="mg-home" className="w-100">

      
    <div className="w-full h-full py-3 flex flex-col items-center justify-center"> {/* Ensure Hero takes full space */}
    <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-4 z-10",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 mb-0">
          <span>✨ Capturing Moments & Memories</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>

      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-4xl fw-medium text-neutral-800 dark:text-neutral-200  text-center hero-head ps-0">
        Crafting Visual Stories,<br /> One Click at a Time!
      </h2>
      <Carousel items={cards} 
  autoScrollInterval={1500}  />
    </div>
    </section>
  );
  
}

const Frame1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Your Dream Wedding Captured Perfectly - Wedding Photography in Dubai, Abu Dhabi, and
              Sharjah, UAE -
              </span>{" "}
              When it comes to capturing the magic of your wedding day, trust a professional wedding
              photographer with years of experience in the UAE. We specialize in creating beautiful,
              timeless images that tell the story of your love. Whether you&apos;re in Dubai, Abu Dhabi, or Sharjah,
              our wedding photography services ensure that every precious moment is documented with
              perfection.
              <br /><br />
              Our approach to wedding photography blends traditional techniques with modern styles to
              provide you with stunning photos that reflect your unique love story. From intimate
              ceremonies to grand celebrations, we capture the essence of your special day. Our services
              include engagement photoshoots, bridal portraits, couple photoshoots, and full wedding day
              coverage.
            </p>
            <Image
              src="/images/mg_photo_1.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4"
            />
          </div>
        );
      })}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Frame2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Capturing Your Baby’s Precious Moments - Baby Photoshoots in Dubai, Abu Dhabi, and
              Sharjah
              </span>{" "} <br /> <br />
              There’s nothing more precious than your baby’s early milestones. Our professional baby
              photoshoots in Dubai, Abu Dhabi, and Sharjah are designed to capture these fleeting
              moments with love, creativity, and care. Whether it&apos;s your newborn’s first few days, a
              milestone birthday, or a special family session, we ensure each photo session is as
              memorable as your baby&apos;s first smile.
              <br />
              <br />
              Our baby photography services are centered around creating a relaxed and fun atmosphere,
              so your little one feels comfortable and natural in front of the camera. We use a combination
              of soft lighting, cute props, and creative poses to highlight the innocence and beauty of your
              baby.
            </p>
            <Image
              src="/images/mg_photo_2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4"
            />
          </div>
        );
      })}
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Frame3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Why Choose Us for Your Wedding Photography? <br /> <br />
              </span>{" "}
             <span className="fw-semibold">Experienced Wedding Photographers</span> With extensive experience in the UAE wedding
             scene, we know how to capture every moment, from the first kiss to the last dance.
              <br /><br />
             <span className="fw-semibold">Tailored to Your Style</span> Whether you prefer candid, photojournalistic, or classic wedding
             photography, we tailor our approach to suit your vision.
              <br /><br />
             <span className="fw-semibold">Serving Dubai, Abu Dhabi, and Sharjah</span> We offer wedding photography services across
              the UAE, including Dubai, Abu Dhabi, and Sharjah, ensuring we are accessible no matter where
              you are.
              <br />
              <br />
              Let us help you preserve the memories of your once-in-a-lifetime day with photos that will last forever.
            </p>
            <Image
              src="/images/mg_photography_couples.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4"
            />
          </div>
        );
      })}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Frame5 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Book Your Photoshoot Today!
              </span>{" "}
              Whether you&apos;re looking for elegant wedding photography or capturing the adorable moments
              of your baby&apos;s first year, we are here to help you preserve the memories that matter most.
              Serving Dubai, Abu Dhabi, Sharjah, and the entire UAE, we provide expert photography
              services that fit your needs. **Contact us today** to book your session and make lasting
              memories!            
              </p>
            <Image
              src="/images/mg-photography-couple-2.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4 w-100"
            />
          </div>
        );
      })}
    </>
  );
};
const Frame4 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Why Choose Us for Your Baby Photoshoot?
              </span>{" "}
              <span className="fw-semibold">Experienced Baby Photographer</span>Our photographers are skilled in handling newborns
              and young children, making them feel at ease for the perfect shot.<br /><br />
              <span className="fw-semibold">Customized Photoshoots</span>We offer customized baby photoshoots tailored to your
              family’s needs, including studio shoots and outdoor sessions<br /><br />
              <span className="fw-semibold">Baby Photography in Dubai, Abu Dhabi, and Sharjah</span>We offer convenient baby
              photoshoots across the UAE, including Dubai, Abu Dhabi, and Sharjah<br /><br />
              Let us help you create stunning, professional images that you’ll cherish forever.
              </p>
            <Image
              src="/images/mg-photography-baby.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4 w-100"
            />
          </div>
        );
      })}
    </>
  );
};
const Frame6 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-1xl ">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
              Capture Moments Together
              </span>{" "}
              Celebrate the charm and elegance of the groom with captivating photography that tells a story of style and emotion. Our expert lens captures every moment, from candid smiles to poised portraits, ensuring timeless memories you will cherish forever.            </p>
            <Image
              src="/images/mg-event-photography.jpg"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain mt-10 rounded-4 w-100"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Bonded Hearts",
    title: "Your Dream Wedding Captured Perfectly",
    src: "/images/mg_photo_1.jpg",
    content: <Frame1 />,
  },
  {
    category: "Bright Smile",
    title: "Capturing Your Baby’s Precious Moments",
    src: "/images/mg_photo_2.jpg",
    content: <Frame2 />,
  },
  {
    category: "Frame Love",
    title: "Why Choose Us for Your Wedding Photography?",
    src: "/images/mg_photography_couples.jpg",
    content: <Frame3 />,
  },
  {
    category: "Tiny Treasures",
    title: "Why Choose Us for Your Baby Photoshoot?",
    src: "/images/mg-photography-baby.jpg",
    content: <Frame4 />,
  },
  {
    category: "Love Lens",
    title: "Book Your Photoshoot Today!",
    src: "/images/mg-photography-couple-2.jpg",
    content: <Frame5 />,
  },

  {
    category: "Groom Focus",
    title: "Elegance Captured, Memories Preserved",
    src: "/images/mg-event-photography.jpg",
    content: <Frame6 />,
  },
];
