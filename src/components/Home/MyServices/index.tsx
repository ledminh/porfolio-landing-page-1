import { services } from "@/data";

export default function MyServices() {
  return (
    <div>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            <div>icon</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button>
              <span>ORDER NOW</span>
              <span>Arrow right</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
