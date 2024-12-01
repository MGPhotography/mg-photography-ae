"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/ui/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "1,000+ Weddings Captured",
    description: "Celebrating love stories since 2018.",
    time: "15m ago",

    icon: "💍",
    color: "#00C9A7",
  },
  {
    name: "100+ 5-Star Reviews",
    description: "Our clients love what we do!",
    time: "1d ago",
    icon: "🌟",
    color: "#FFB800",
  },
  {
    name: "Expanding Horizons",
    description: "Now available for international bookings.",
    time: "2d Seconds ago",
    icon: "🌐",
    color: "#1E86FF",
  },
  {
    name: "Milestone Celebrated",
    description: "500th client in 2023 · A moment to remember!",
    time: "3d ago",
    icon: "✨",
    color: "#1E86FF",
  },
  {
    name: "Video Production Added",
    description: "2021 · Capturing life in motion.",
    time: "4d ago",
    icon: "🎥",
    color: "#FFB800",
  },
  {
    name: "Corporate Headshots Project",
    description: "Helped 50+ companies with professional branding.",
    time: "5d ago",
    icon: "🏙️",
    color: "#1E86FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2 p-3 py-1",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden py-2">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 mb-0">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-[600px] w-[90%] flex-col p-6 overflow-hidden rounded-lg mx-auto animated-list",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
