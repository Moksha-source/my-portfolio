export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-2xl w-full">

        <h2 className="text-4xl font-bold text-center mb-4">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Feel free to reach out to me for opportunities or collaborations.
        </p>

        <form className="space-y-6">

          <div>
            <label className="block mb-2">
              Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block mb-2">
              Message
            </label>

            <textarea
              placeholder="Write your message..."
              rows={5}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Let's Connect
          </button>

        </form>

      </div>
    </section>
  );
}