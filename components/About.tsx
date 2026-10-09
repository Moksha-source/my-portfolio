export default function About() {
  return (
    <section id="about" className="py-6 py-8">

      {/* Heading */}
      <div className="mb-7">

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          About Me
        </h2>

        <div className="w-12 h-1 bg-pink rounded-full mt-3" />

      </div>


      {/* About Text */}
      <div className="max-w-4xl">

        <p className="text-gray leading-8">
          I'm a Computer Science Engineering graduate with a strong
          interest in software development and web technologies.
          I enjoy turning ideas into practical applications and
          continuously improving my coding and problem-solving skills.
        </p>

        <p className="text-gray leading-8 mt-5">
          I've worked on projects using Python, Flask, SQL, machine
          learning, and modern web technologies. I'm currently
          expanding my skills with Next.js and Tailwind CSS.
        </p>

      </div>


      {/* What I'm Doing */}
      <div className="mt-14">

        <h3 className="text-2xl font-bold text-black mb-7">
          What I'm Doing
        </h3>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Web Development */}
          <div className="bg-pink-light border border-gray-border rounded-2xl p-6 hover:border-pink hover:-translate-y-1 transition duration-300">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink text-xl shrink-0">
                💻
              </div>

              <div>

                <h4 className="text-lg font-semibold text-black mb-2">
                  Web Development
                </h4>

                <p className="text-sm text-gray leading-6">
                  Building responsive and modern web applications
                  using technologies like React, Next.js, Flask,
                  HTML and CSS.
                </p>

              </div>

            </div>

          </div>


          {/* Python Development */}
          <div className="bg-white border border-gray-border rounded-2xl p-6 hover:border-pink hover:-translate-y-1 transition duration-300">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-pink-light flex items-center justify-center text-pink text-xl shrink-0">
                🐍
              </div>

              <div>

                <h4 className="text-lg font-semibold text-black mb-2">
                  Python Development
                </h4>

                <p className="text-sm text-gray leading-6">
                  Developing practical applications and backend
                  solutions using Python and Flask.
                </p>

              </div>

            </div>

          </div>


          {/* Problem Solving */}
          <div className="bg-white border border-gray-border rounded-2xl p-6 hover:border-pink hover:-translate-y-1 transition duration-300">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-pink-light flex items-center justify-center text-pink text-xl shrink-0">
                🧠
              </div>

              <div>

                <h4 className="text-lg font-semibold text-black mb-2">
                  Problem Solving
                </h4>

                <p className="text-sm text-gray leading-6">
                  Practicing data structures, algorithms and
                  logical problem solving to strengthen my coding skills.
                </p>

              </div>

            </div>

          </div>


          {/* Continuous Learning */}
          <div className="bg-pink-light border border-gray-border rounded-2xl p-6 hover:border-pink hover:-translate-y-1 transition duration-300">

            <div className="flex items-start gap-4">

              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-pink text-xl shrink-0">
                🚀
              </div>

              <div>

                <h4 className="text-lg font-semibold text-black mb-2">
                  Continuous Learning
                </h4>

                <p className="text-sm text-gray leading-6">
                  Exploring new technologies and continuously
                  improving my development skills through projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}