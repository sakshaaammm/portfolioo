import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    { name: 'ReactJS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'Data Structures', level: 85 },
  ];

  return (
    <section id="skills" className="section">
      <div className="glass p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded">
                <motion.div
                  className="skill-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;