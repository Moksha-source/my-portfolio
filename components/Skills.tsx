const skills = [
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "Flask",
  "SQL",
  "Git",
  "Next.js",
  "Tailwind CSS",
  "Github"
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-5xl w-full text-center">

        <h2 className="text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-700 rounded-xl p-6 hover:border-white transition"
            >
              <p className="text-lg font-semibold">
                {skill}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}