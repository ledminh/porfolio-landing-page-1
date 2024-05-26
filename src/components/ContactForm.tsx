import { ArrowRightIcon } from "@/assets/icons";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-4">
      <label htmlFor="name">
        <input
          className="inset-0 border border-gray-300 p-2 rounded-lg w-full"
          type="text"
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="email">
        <input
          className="inset-0 border border-gray-300 p-2 rounded-lg w-full"
          type="email"
          id="email"
          placeholder="Email"
        />
      </label>
      <label htmlFor="message">
        <textarea
          className="inset-0 border border-gray-300 p-2 rounded-lg w-full"
          rows={12}
          id="message"
          placeholder="Message"
        />
      </label>
      <button
        type="submit"
        className="bg-yellow-700 text-white flex justify-center items-center gap-2 p-2 rounded-lg w-24 group hover:bg-yellow-800 transition-colors"
      >
        <span className="font-bold">Send</span>
        <span className="w-5 h-5 block group-hover:translate-x-1 transition-transform ">
          <ArrowRightIcon />
        </span>
      </button>
    </form>
  );
}
