import { pricePlans } from "@/data";

export default function PricePlans() {
  return (
    <div>
      <div>Price plans</div>
      <ul>
        {pricePlans.plans.map((plan) => (
          <li key={plan.id}>
            <h3>{plan.title}</h3>
            <p>
              {plan.currency}
              {plan.price}
            </p>
            <ul>
              {pricePlans.features.map((feature, index) => (
                <li key={index}>
                  {plan.features[index] ? "✅" : "❌"} {feature}
                </li>
              ))}
            </ul>
            {plan.popular ? <div>Popular</div> : null}
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
