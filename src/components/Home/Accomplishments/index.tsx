import { accomplishments } from "@/data";

export default function Accomplishments() {
  return (
    <ul className="flex flex-col justify-center items-center gap-4 lg:gap-10 w-full lg:flex-row">
      {accomplishments.map((item) => (
        <li
          key={item.id}
          className="bg-white flex flex-col justify-center items-center w-full gap-4 text-center p-4 rounded-lg relative lg:tape lg:w-44 h-40"
        >
          <p className="text-2xl font-bold">
            <span>{item.count}</span>
            {item.plus && <span className="text-yellow-700">+</span>}
          </p>
          <div className="h-[1px] bg-yellow-700 w-4/5 mx-auto" />
          <h3 className="font-bold text-sm">
            {item.title.toLocaleUpperCase()}
          </h3>
        </li>
      ))}
    </ul>
  );
}
