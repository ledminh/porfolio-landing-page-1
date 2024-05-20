export default function MessageModal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg w-4/5 mx-auto mt-20">
        <h3 className="font-bold text-xl">Send me a message</h3>
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Message"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button className="bg-yellow-700 text-white p-4 rounded-xl hover:bg-yellow-700/80">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
