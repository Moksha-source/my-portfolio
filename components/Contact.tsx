export default function Contact() {
  return (
    <section id="contact" className="py-10 md:py-14">

      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Contact Me
        </h2>

        <div className="w-12 h-1 bg-pink rounded-full mt-3" />

        <p className="text-gray mt-5 leading-7">
          Have an opportunity or a project in mind? I'd love to hear from you.
          Feel free to reach out!
        </p>
      </div>

      {/* Contact Information Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">

        {/* Email */}
        <a
          href="mailto:kmoksha54@gmail.com"
          className="bg-pink-light border border-pink-border rounded-2xl p-6 flex items-center gap-4 hover:border-pink hover:-translate-y-1 transition duration-300"
        >
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-pink text-xl">
            ✉
          </div>

          <div>
            <h3 className="font-semibold text-black">Email Me</h3>
            <p className="text-sm text-gray mt-1 break-all">
              kmoksha54@gmail.com
            </p>
          </div>
        </a>

        {/* Location */}
        <div className="bg-white border border-pink-border rounded-2xl p-6 flex items-center gap-4 hover:border-pink hover:-translate-y-1 transition duration-300">
          <div className="w-12 h-12 bg-pink-light rounded-xl flex items-center justify-center text-pink text-xl">
            📍
          </div>

          <div>
            <h3 className="font-semibold text-black">Location</h3>
            <p className="text-sm text-gray mt-1">
              India
            </p>
          </div>
        </div>

      </div>

      {/* Contact Form */}
      <div className="bg-white border border-pink-border rounded-2xl p-6 md:p-8">

        <h3 className="text-2xl font-bold text-black mb-2">
          Let's Connect 💗
        </h3>

        <p className="text-gray mb-8 leading-7">
          Send me a message about job opportunities, collaborations,
          or projects.
        </p>

        <form
          action="mailto:kmoksha54@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black mb-2"
            >
              Your Name
            </label>

            <input
              id="name"
              name="Name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full rounded-xl border border-pink-border bg-[#fff5f8] px-4 py-3 text-black placeholder:text-gray focus:outline-none focus:border-pink focus:ring-2 focus:ring-pink-light transition"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black mb-2"
            >
              Your Email
            </label>

            <input
              id="email"
              name="Email"
              type="email"
              placeholder="Enter your email address"
              required
              className="w-full rounded-xl border border-pink-border bg-[#fff5f8] px-4 py-3 text-black placeholder:text-gray focus:outline-none focus:border-pink focus:ring-2 focus:ring-pink-light transition"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black mb-2"
            >
              Your Message
            </label>

            <textarea
              id="message"
              name="Message"
              rows={5}
              placeholder="Write your message here..."
              required
              className="w-full rounded-xl border border-pink-border bg-[#fff5f8] px-4 py-3 text-black placeholder:text-gray focus:outline-none focus:border-pink focus:ring-2 focus:ring-pink-light transition resize-y"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full sm:w-auto bg-pink text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-dark hover:-translate-y-0.5 transition duration-300"
          >
            Send Message →
          </button>

        </form>
      </div>

    </section>
  );
}