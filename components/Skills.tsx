const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Flask", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["SQL", "SQLite"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Machine Learning"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-4">
          Skills
        </h2>

        <p className="text-gray-400 text-center mb-12">
          Technologies and tools I have worked with
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-gray-700 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition duration-300"
            >

              <h3 className="text-xl font-semibold mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-lg text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}