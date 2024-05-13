import { name, socialLinks, subtitle, bio } from "@/data";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div>
        <div>Profile Picture</div>
        <div>{name}</div>
        <ul>
          {subtitle.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        {socialLinks.map((item) => (
          <Link key={item.id} href={item.href}>
            Social Icon
          </Link>
        ))}
      </div>

      <div>
        {bio.map((item) => (
          <div key={item.id}>
            <h3>{item.label}</h3>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <button>Contact Me</button>
    </div>
  );
}
