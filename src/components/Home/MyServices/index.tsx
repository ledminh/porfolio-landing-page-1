import { ArrowRightIcon } from "@/assets/icons";
import { services } from "@/data";
import Link from "next/link";

export default function VideoResume() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-56">My Services</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <ul className="flex flex-col gap-4 lg:flex-row lg:flex-wrap lg:justify-between lg:items-center">
        {services.map((service, index) => (
          <li
            key={index}
            className="flex flex-col justify-between gap-4 bg-white rounded-lg p-6 lg:basis-[45%] lg:h-72"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <service.icon />
            </div>
            <h3 className="font-bold">{service.title}</h3>
            <p className="text-sm">{service.description}</p>

            <Link
              href="/contact"
              className="flex justify-left items-center group text-yellow-700 w-32 font-bold gap-1"
            >
              <span>ORDER NOW</span>
              <span className="mt-2 w-4 h-6 group-hover:translate-x-1 group-hover:transition-transform">
                <ArrowRightIcon />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
