import Link from "next/link";
import { videoResumeLink } from "@/data";

export default function VideoResume() {
  return (
    <div>
      {videoResumeLink ? (
        <Link href={videoResumeLink}>Watch my video resume</Link>
      ) : null}
    </div>
  );
}
