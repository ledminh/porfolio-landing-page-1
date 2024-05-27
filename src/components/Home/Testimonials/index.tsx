"use client";

import { ArrowLeftIcon, ArrowRightIcon } from "@/assets/icons";
import { testimonials } from "@/data";
import Image from "next/image";

import { useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex(index + 1);

  const handlePrev = () => setIndex(index - 1);

  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-56">Testimonials</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <div
        key={testimonials[index].id}
        className="bg-white flex flex-col gap-4 justify-center items-center p-8 pt-16 text-center rounded-lg shadow-lg relative group scale-95 hover:scale-100 transition-transform duration-500"
      >
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className="bg-yellow-700 text-white p-4 rounded-full absolute top-5 left-5 opacity-0 group-hover:opacity-100 disabled:opacity-5 disabled:group-hover:opacity-5 translate-x-12 group-hover:transition group-hover:duration-500 group-hover:translate-x-0"
        >
          <span className="block w-6 h-6 rotate-180">
            <ArrowRightIcon />
          </span>
        </button>
        <button
          onClick={handleNext}
          disabled={index === testimonials.length - 1}
          className="bg-yellow-700 text-white p-4 rounded-full absolute top-5 right-5 disabled:opacity-5 disabled:group-hover:opacity-5 opacity-0 group-hover:opacity-100 -translate-x-12 group-hover:transition group-hover:duration-500 group-hover:translate-x-0"
        >
          <span className="block w-6 h-6">
            <ArrowRightIcon />
          </span>
        </button>
        <Image
          src={testimonials[index].photo}
          alt={testimonials[index].author}
          width={100}
          height={100}
          className="rounded-full"
        />
        <h3 className="font-bold">{testimonials[index].author}</h3>
        <p className="text-yellow-700 font-bold text-sm">
          {testimonials[index].position}
        </p>
        <p>{testimonials[index].content}</p>
      </div>
    </div>
  );
}
