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
    <section id="skills" className="py-6 py-8">

      {/* Heading */}
      <div className="mb-8">

        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Skills
        </h2>

        <div className="w-12 h-1 bg-pink rounded-full mt-3" />

        <p className="text-gray mt-4">
          Technologies and tools I have worked with
        </p>

      </div>


      {/* Skill Groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className={`rounded-2xl p-5 border border-gray-border hover:border-pink hover:-translate-y-1 transition duration-300 ${
              index % 2 === 0
                ? "bg-pink-light"
                : "bg-white"
            }`}
          >

            {/* Group heading */}
            <div className="flex items-center gap-3 mb-5">

              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-pink font-bold">
                {index + 1}
              </div>

              <h3 className="text-xl font-semibold text-black">
                {group.title}
              </h3>

            </div>


            {/* Skills */}
            <div className="flex flex-wrap gap-3">

              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white border border-gray-border px-4 py-2 rounded-full text-sm text-gray-dark hover:border-pink hover:text-pink transition duration-300"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}