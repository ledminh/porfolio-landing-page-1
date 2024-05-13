import { testimonials } from "@/data";
export default function Testimonials() {
  return (
    <div>
      <div>Testimonials</div>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <div>Image</div>
            <p>{testimonial.content}</p>
            <h3>{testimonial.author}</h3>
            <p>{testimonial.position}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
