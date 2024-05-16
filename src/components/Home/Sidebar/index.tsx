import { sidebarData } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const { name, subtitle, socialLinks, bio, profilePicture } = sidebarData;
  return (
    <div>
      <div>
        <Image
          src={profilePicture}
          alt="profile picture"
          width={500}
          height={500}
          className="rounded-full overflow-hidden w-32 h-32"
        />
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
