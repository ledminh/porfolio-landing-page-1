import { ArrowRightIcon } from "@/assets/icons";
import { pricePlans } from "@/data";
import Link from "next/link";

export default function PricePlans() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-56">Price Plans</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <div>
        <ul className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center">
          {pricePlans.plans.map((plan) => (
            <li
              key={plan.id}
              className="flex flex-col justify-center items-center gap-6 bg-white p-4 rounded-lg relative shadow-md lg:basis-[45%]"
            >
              <h3 className="font-bold">{plan.title}</h3>
              <p className="flex justify-between items-center gap-1">
                <span className="text-gray-600">{plan.currency}</span>
                <span className="text-4xl font-bold">{plan.price}</span>
              </p>
              <div className="h-[1px] w-full bg-gray-200" />
              <ul>
                {pricePlans.features.map((feature, index) => (
                  <li key={index}>
                    <span>{plan.features[index] ? "✅" : "❌"}</span>
                    <span
                      className={`${
                        plan.features[index]
                          ? "text-black font-semibold"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.popular ? (
                <div className="absolute top-0 right-0 bg-yellow-700 text-white px-2 py-1 rounded-tr-lg rounded-bl-lg font-bold">
                  Popular
                </div>
              ) : null}

              <Link
                href="/contact"
                className="flex justify-center items-center gap-2 bg-yellow-700 text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-yellow-600 transition-all group font-semibold"
              >
                <span>ORDER NOW</span>
                <span className="w-4 h-6 mt-2 group-hover:translate-x-1 group-hover:transition-transform">
                  <ArrowRightIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
