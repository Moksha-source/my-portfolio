import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-4 md:p-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

        {/* LEFT PROFILE CARD */}
        <aside className="bg-white border border-gray-border rounded-3xl p-6 md:p-8 h-fit lg:sticky lg:top-8 shadow-sm">

          {/* Profile */}
          <div className="flex flex-col items-center text-center">

            {/* Profile Image */}
            <div className="w-36 h-36 rounded-3xl bg-pink-light border border-pink flex items-center justify-center mb-6 overflow-hidden">
              <span className="text-5xl">
                👩🏻‍💻
              </span>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold text-black">
              Kukkunuru Moksha
            </h1>

            {/* Role */}
            <span className="mt-3 bg-pink-light text-pink px-5 py-2 rounded-full text-sm font-medium">
              Software Developer
            </span>

          </div>


          {/* Divider */}
          <div className="border-t border-gray-border my-7" />


          {/* Contact Details */}
          <div className="space-y-5">

            {/* Email */}
            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-pink">
                ✉
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray">
                  Email
                </p>

                <p className="text-sm text-gray-dark mt-1">
                  kmoksha54@gmail.com
                </p>
              </div>

            </div>


            {/* Location */}
            <div className="flex items-center gap-4">

              <div className="w-11 h-11 rounded-xl bg-pink-light flex items-center justify-center text-pink">
                📍
              </div>

              <div>
                <p className="text-xs uppercase tracking-wider text-gray">
                  Location
                </p>

                <p className="text-sm text-gray-dark mt-1">
                  India
                </p>
              </div>

            </div>

          </div>


          {/* Social Links */}
          <div className="border-t border-gray-border mt-7 pt-6">

            <div className="flex justify-center gap-4">

              <a
                href="#"
                className="px-5 py-2 rounded-full bg-gray-light text-gray-dark hover:bg-pink-light hover:text-pink transition duration-300"
              >
                GitHub
              </a>

              <a
                href="#"
                className="px-5 py-2 rounded-full bg-gray-light text-gray-dark hover:bg-pink-light hover:text-pink transition duration-300"
              >
                LinkedIn
              </a>

            </div>

          </div>

        </aside>


        {/* RIGHT MAIN CARD */}
        <section className="bg-white border border-gray-border rounded-3xl overflow-hidden">

          <Navbar />

          <div className="p-6 md:p-10 lg:p-12">

            <About />

            <Skills />

            <Projects />

            <Contact />

          </div>

          <Footer />

        </section>

      </div>

    </main>
  );
 
}