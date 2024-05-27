import Link from "next/link";

export default function Copyright() {
  return (
    <div className="bg-white p-4 flex flex-col justify-center items-center text-center rounded-lg lg:flex-row lg:justify-between lg:text-left">
      <span className="font-bold">
        © {new Date().getFullYear()}. ALL RIGHTS RESERVED.
      </span>
      <Link
        href="https://github.com/ledminh/porfolio-landing-page-1"
        className="text-gray-500 underline"
      >
        Source code
      </Link>
    </div>
  );
}
