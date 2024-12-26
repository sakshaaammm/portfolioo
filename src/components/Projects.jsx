import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "React-based app for employee/admin task management",
      link: "https://employeesakshamnetlifyapp.netlify.app/",
    },
    {
      title: "Task Manager",
      description: "Web app to manage and streamline tasks efficiently",
      link: "https://lighthearted-gelato-c3d57f.netlify.app/",
    },
    {
      title: "Algorithm Visualizer",
      description: "Visualizes sorting algorithms using HTML, CSS, and JavaScript",
      link: "https://eloquent-panda-7f56b7.netlify.app/",
    },
    {
      title: "Dynamic Event Calendar",
      description: "React app for event scheduling with advanced features",
      link: "https://wondrous-melba-9cbbe6.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="glass p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card glass p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;