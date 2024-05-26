import { myStory } from "@/data";
export default function MyStory() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-36">My Story</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <div className="bg-white p-8 rounded-xl font-semibold italic shadow-lg relative quotation-mark">
        {myStory.content}
      </div>
    </div>
  );
}
