const projects = [
  {
    title: "Sai Fashion Zone",
    description:
      "A modern clothing catalog website built for a men's fashion store.",
    technologies: ["Python", "Flask", "SQLite", "HTML", "CSS"],
    github: "https://github.com/Moksha-source/sai-fashion-zone",
    demo: "https://sai-fashion-zone-j375.onrender.com/",
  },
  {
    title: "Hospital Patient Follow-up Portal",
    description:
      "A web application for managing and tracking patient follow-up records.",
    technologies: ["Python", "Flask", "SQLAlchemy", "SQLite"],
    github: "https://github.com/Moksha-source/hospital-patient-followup-portal",
    demo: "https://hospital-patient-followup-portal.onrender.com",
  },
  {
    title:"Cyber Threat Detection System",
    description:
    "A machine learning-based system developed to detect and classify potential cyber threats from network activity and identify suspicious patterns.",
    technologies: ["python","Machine Learning","pandas","Numpy"],
    github: "https://github.com/Moksha-source/Cyber-Threat-Detection-by-using-AI-and-ML",
    demo: "https://cyber-threat-detection-by-using-ai-and-ml.onrender.com",
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
              className="border border-gray-700 rounded-xl p-8 hover:border-white hover:-translate-y-2 transition duration-300"
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
                    className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 hover:scale-105 transition"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 px-5 py-2 rounded-lg hover:border-white hover:scale-105 transition"
                >
                  Live Demo
                </a>

              </div>      

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}