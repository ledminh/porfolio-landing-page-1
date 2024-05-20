import Link from "next/link";

export default function ContactMe() {
  return (
    <Link
      href="/contact"
      className="bg-yellow-700 text-white p-4 rounded-xl hover:bg-yellow-700/80"
    >
      Contact Me
    </Link>
  );
}

// https://github.com/vercel/nextgram/blob/main/app/%40modal/(.)photos/%5Bid%5D/modal.tsx
