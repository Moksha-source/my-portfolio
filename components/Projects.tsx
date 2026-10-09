const projects = [
  {
    title: "Sai Fashion Zone",
    description:
      "A modern clothing catalog website built for a men's fashion store, allowing visitors to explore clothing collections.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Moksha-source/sai-fashion-zone",
    demo: "https://sai-fashion-zone-j375.onrender.com/",
  },
  {
    title: "Hospital Patient Follow-up Portal",
    description:
      "A web application for managing and tracking patient follow-up records using a simple, organized interface.",
    technologies: ["Python", "Flask", "SQLAlchemy", "SQLite"],
    github:
      "https://github.com/Moksha-source/hospital-patient-followup-portal",
    demo: "https://hospital-patient-followup-portal.onrender.com",
  },
  {
    title: "Cyber Threat Detection System",
    description:
      "A machine learning project focused on identifying and classifying potential cyber threats from network activity.",
    technologies: ["Python", "Machine Learning", "Pandas", "NumPy"],
    github:
      "https://github.com/Moksha-source/Cyber-Threat-Detection-by-using-AI-and-ML",
    demo: "https://cyber-threat-detection-by-using-ai-and-ml.onrender.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-6 md:py-8">

      {/* Heading */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          My Projects
        </h2>

        <div className="w-12 h-1 bg-pink rounded-full mt-3" />

        <p className="text-gray mt-4 leading-7">
          Here are some of the projects I've worked on using different
          technologies and programming tools.
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`flex flex-col rounded-2xl border border-pink-border p-5 md:p-6 hover:border-pink hover:-translate-y-1 transition duration-300 ${
              index === 0 ? "bg-pink-light" : "bg-white"
            }`}
          >

            {/* Project Number */}
            <p className="text-sm font-semibold text-pink mb-3">
              PROJECT 0{index + 1}
            </p>

            {/* Title */}
            <h3 className="text-xl font-bold text-black mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray text-sm leading-7 mb-5">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-white border border-pink-border px-3 py-1.5 rounded-full text-sm text-gray-dark"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-dark transition"
              >
                GitHub ↗
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-pink text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition"
              >
                Live Demo ↗
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}