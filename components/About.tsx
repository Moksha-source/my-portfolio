export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-4xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-2xl font-semibold mb-4">
              A little about me
            </h3>

            <p className="text-gray-400 leading-8">
              I'm a Computer Science Engineering graduate with a
              strong interest in software development and web
              technologies. I enjoy turning ideas into practical
              applications and continuously improving my coding
              and problem-solving skills.
            </p>

            <p className="text-gray-400 leading-8 mt-4">
              I've worked on projects using Python, Flask, SQL,
              machine learning, and modern web technologies. I'm
              currently expanding my skills with Next.js and
              Tailwind CSS.
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl p-8">

            <h3 className="text-xl font-semibold mb-6">
              What I'm focused on
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>💻 Software Development</li>
              <li>🌐 Web Development</li>
              <li>🐍 Python Development</li>
              <li>🧠 Problem Solving & DSA</li>
              <li>🚀 Learning New Technologies</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}