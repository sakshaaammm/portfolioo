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

  const codingProfiles = [
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/SAKSHAM0011/',
      description: 'Solved numerous DSA problems'
    },
    {
      name: 'GeeksforGeeks',
      link: 'https://www.geeksforgeeks.org/user/saksham39pj62/',
      description: 'Active problem solver'
    },
    {
      name: 'Coding Ninjas',
      link: 'https://www.naukri.com/code360/profile/bd82053e-7d52-4e6e-b63c-970f87637e01',
      description: 'Regular participant'
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="glass p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Skills</h2>
        
        {/* Technical Skills */}
        <div className="space-y-6 mb-12">
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

        {/* DSA Achievement Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">DSA Achievements</h3>
          <div className="glass p-4">
            <p className="text-lg mb-4">Solved 200+ DSA Problems across various platforms</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {codingProfiles.map((profile, index) => (
                <motion.div
                  key={profile.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-4"
                >
                  <h4 className="font-bold mb-2">{profile.name}</h4>
                  <p className="text-sm mb-2">{profile.description}</p>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700"
                  >
                    View Profile →
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;