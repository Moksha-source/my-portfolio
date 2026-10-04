import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">

      <Navbar />

     <div className="min-h-[90vh] flex items-center justify-center px-8">

      <div className="max-w-4xl text-center">

        <p className="text-lg text-gray-400 mb-4">
          Hi, I'm
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Kukkunuru Moksha 👋
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Computer Science Engineer & Developer
        </h2>

        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10 leading-8">
          I build web applications, explore new technologies,
          and enjoy solving real-world problems through code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#projects"
            className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View My Projects
          </a>

          <a
            href="#contact"
            className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:border-white transition"
          >
            Let's Connect
          </a>

        </div>

      </div>

    </div>

      <About/>

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </main>
  );
}