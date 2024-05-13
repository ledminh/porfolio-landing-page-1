import { heroImage } from "@/data";
import Link from "next/link";

export default function HeroImage() {
  const { firstLine, secondLine, linkHref, linkText, image } = heroImage;
  return (
    <div>
      <div>Image</div>
      <div>
        <div>{firstLine}</div>
        <div>{secondLine}</div>
        <Link href={linkHref}>{linkText}</Link>
      </div>
    </div>
  );
}
