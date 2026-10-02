const projects = [
  {
    title: "Sai Fashion Zone",
    description:
      "A modern clothing catalog website built for a men's fashion store.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
  },
  {
    title: "Hospital Patient Follow-up Portal",
    description:
      "A web application for managing and tracking patient follow-up records.",
    technologies: ["Python", "Flask", "SQLAlchemy", "SQLite"],
  },
  {
    title:"Cyber Threat Detection System",
    description:
    "A machine learning-based system developed to detect and classify potential cyber threats from network activity and identify suspicious patterns.",
    technologies: ["python","Machine Learning","pandas","Numpy"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-6xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-gray-700 rounded-xl p-8 hover:border-white transition"
            >

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
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