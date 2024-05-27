import { latestPublications } from "@/data";
import Image from "next/image";

import Link from "next/link";

export default function LastestPublications() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-80">Latest Publications</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <ul className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-center">
        {latestPublications.map((publication) => (
          <li
            key={publication.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg h-full group"
          >
            <Link href={"/"}>
              <div className="h-96 overflow-hidden">
                <Image
                  src={publication.image}
                  alt={publication.title}
                  width={1200}
                  height={1200}
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-4 flex flex-col gap-4">
                <h4 className="text-gray-400 text-sm font-semibold">
                  {publication.category}
                </h4>
                <h3 className="font-bold">{publication.title}</h3>
                <div className="border-b-2 border-dotted border-gray-400" />
                <span className="text-gray-400 text-sm">
                  {publication.date}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
