"use client";
import React from "react";
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";


export function IpadScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            <span className="text-3xl md:text-[5rem] font-semibold mt-1 mb-5 leading-none">
              Capturing innocence, playfulness, and joy.
              </span>            </h1>
          </>
        }
      >
        <Image
          src={`/images/mg_photography_baby.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
