import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Hero from "./hero";

export function BackgroundBeamsWithCollisionDemo() {
  return (
      <BackgroundBeamsWithCollision className="w-100 h-100 py-5 pt-0">
          <Hero />
      </BackgroundBeamsWithCollision>
  );
}
