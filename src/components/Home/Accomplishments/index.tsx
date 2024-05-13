import { accomplishments } from "@/data";

export default function Accomplishments() {
  return (
    <ul>
      {accomplishments.map((item) => (
        <li key={item.id}>
          <p>
            <span>{item.count}</span>
            {item.plus && <span>+</span>}
          </p>
          <h3>{item.title}</h3>
        </li>
      ))}
    </ul>
  );
}
