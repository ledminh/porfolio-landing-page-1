import { heroImage } from "@/data";
import Link from "next/link";

import Image from "next/image";

export default function HeroImage() {
  const { firstLine, secondLine, linkHref, linkText, image } = heroImage;
  return (
    <div className="h-80 w-full relative">
      <Image
        src={image}
        alt="hero image"
        layout="fill"
        objectFit="cover"
        className="rounded-b-2xl overflow-hidden"
      />
      <div className="z-50 absolute w-full h-full flex flex-col justify-center items-center text-white gap-4">
        <h2>{firstLine}</h2>
        <h1 className="text-4xl font-bold">{secondLine}</h1>
        <Link
          href={linkHref}
          className="px-8 py-2 border font-bold border-white rounded-lg bg-black/30 hover:bg-black/70 transition-all duration-300 ease-in-out"
        >
          {linkText}
        </Link>
      </div>
    </div>
  );
}
