import { sidebarData } from "@/data";
import Link from "next/link";
import Image from "next/image";
import SubtitleList from "./SubtitleList";
import ContactMe from "./ContactMe";

export default function Sidebar() {
  const { name, subtitles, socialLinks, bio, profilePicture } = sidebarData;
  return (
    <>
      <div
        className={`
        tape
        bg-white p-4 rounded-lg
        fixed bottom-0 left-1/2 -translate-x-1/2
        flex flex-col gap-4 justify-center items-center
        lg:hidden  
      `}
      >
        <Image
          src={profilePicture}
          alt="profile picture"
          width={500}
          height={500}
          className="rounded-full overflow-hidden w-12 h-12"
        />
        <h3 className="font-bold">{name}</h3>
        <div className="h-[1px] bg-yellow-700 w-full" />
        <ul className="flex justify-center items-center gap-4">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <Link key={item.id} href={item.href} className="w-4 h-4 block">
                <item.icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`
        tape
        hidden 
        lg:flex flex-col gap-8 justify-center items-center
        z-50 p-4 rounded-lg bg-white 
        w-4/5 mx-auto
        sticky top-[17rem] -translate-y-60`}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src={profilePicture}
              alt="profile picture"
              width={500}
              height={500}
              className="rounded-full overflow-hidden w-32 h-32"
            />
            <h3 className="font-bold text-xl">{name}</h3>
          </div>
          <SubtitleList subtitles={subtitles} />
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="h-[1px] bg-yellow-700/30 w-full" />
          <ul className="flex justify-center items-center gap-4">
            {socialLinks.map((item) => (
              <li key={item.id}>
                <Link key={item.id} href={item.href} className="w-6 h-6 block">
                  <item.icon />
                </Link>
              </li>
            ))}
          </ul>
          <div className="h-[1px] bg-yellow-700/30 w-full" />
        </div>

        <ul className="w-full flex flex-col gap-4">
          {bio.map((item) => (
            <li key={item.id} className="flex justify-between items-center">
              <span className="font-bold">{item.label}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
        <div className="border-dotted border-b-2 border-b-yellow-700/30 w-4/5" />
        <ContactMe />
      </div>
    </>
  );
}
