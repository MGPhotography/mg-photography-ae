/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import './testimonials.css';

const reviews = [
  {
    name: "Karthik Subramanian",
    username: "Chennai",
    body: "Their team turned our wedding into a beautiful story through pictures. Truly amazing work!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Anitha Rajan",
    username: "Coimbatore",
    body: "The pre-wedding shoot was stunning! They knew the perfect spots and angles.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Suresh Kumar",
    username: "Madurai",
    body: "Exceptional photography and professional service. They captured our special day flawlessly.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Meena Ravi",
    username: "Trichy",
    body: "Every moment of our family function was beautifully captured. Highly recommended!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Vikram Prabhu",
    username: "Salem",
    body: "he candid shots they took during our event were simply brilliant. Thank you for the memories!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Priyanka Natarajan",
    username: "Erode",
    body: "Their creativity and attention to detail made our engagement photos unforgettable.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-65 cursor-pointer overflow-hidden rounded-xl border p-3",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2 w-[300px]">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col justify-content-center">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40 mb-0">{username}</p>
        </div>
      </div>
      <blockquote className="mt-5 text-sm w-[300px] testimonial-content">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  return ( 
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background mb-5 testimonials">
      <div className="row mb-5">
            <h1 className='text-center mb-3'>What Clients Say</h1>
            <p className='text-center'>Real stories from those who trust our lens.</p>
        </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
