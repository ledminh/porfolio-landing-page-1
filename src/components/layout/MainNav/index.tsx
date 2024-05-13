import { mainMenu, cvHref } from "@/data";
import Link from "next/link";
export default function MainNav() {
  return (
    <nav>
      <ul>
        {mainMenu.map((item) => (
          <li key={item.id}>
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      <Link href={cvHref}>
        <span>Download CV</span>
        <div>ArrowDown</div>
      </Link>
    </nav>
  );
}
