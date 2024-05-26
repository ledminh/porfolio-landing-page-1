import { videoResumeYoutubeID } from "@/data";

export default function VideoResume() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-2 justify-between items-center">
        <h2 className="font-bold text-2xl w-56">Video Resume</h2>
        <div className="border-dotted border-b-[2px] border-yellow-700 basis-[80%] lg:basis-full h-1/3" />
      </div>
      <iframe
        height="500"
        className="w-[95%] mx-auto rounded-xl shadow-lg outline-none"
        src={`https://www.youtube.com/embed/${videoResumeYoutubeID}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}
