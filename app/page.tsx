import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdf2f8] text-[#1f2937] p-6 md:p-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">

        {/* LEFT PROFILE CARD */}
        <aside className="bg-white border border-[#f3d5e5] rounded-3xl p-8 h-fit">

          <div className="flex flex-col items-center text-center">

            {/* Temporary profile image */}
           <div className="w-32 h-32 rounded-3xl bg-[#fce7f3] border border-[#f9a8d4] flex items-center justify-center mb-6">
              <span className="text-4xl">👩🏻‍💻</span>
            </div>

            <h1 className="text-2xl font-bold">
              Kukkunuru Moksha
            </h1>

            <span className="mt-3 bg-[#fce7f3] text-pink-600 px-4 py-2 rounded-lg text-sm font-medium">
              Software Developer
            </span>

          </div>

          <div className="border-t border-[#f3d5e5] my-8" />

          <div className="space-y-6">

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Email
              </p>

              <p className="text-sm text-gray-300 mt-1">
                kmoksha54@gmail.com
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500 uppercase">
                Location
              </p>

              <p className="text-sm text-gray-300 mt-1">
                India
              </p>
            </div>

          </div>

          <div className="flex justify-center gap-5 mt-8 text-gray-400">

           <span className="text-pink-500 hover:text-pink-600 transition cursor-pointer">
            GitHub
          </span>

          <span className="text-pink-500 hover:text-pink-600 transition cursor-pointer">
            LinkedIn
          </span>

          </div>

        </aside>


        {/* RIGHT CONTENT */}
        <section className="bg-white border border-[#f3d5e5] rounded-3xl overflow-hidden">
          <Navbar />

          <div className="p-8 md:p-12">

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