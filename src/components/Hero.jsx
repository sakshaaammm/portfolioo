import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="section flex items-center justify-center">
      <div className="glass p-8 max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-4"
        >
          Saksham Bhatia
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl mb-8"
        >
          Computer Science Student & Web Developer
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto"
        >
          A passionate Computer Science student at SRM University NCR Campus, specializing in web development and problem-solving. With expertise in React, Java, and Data Structures, I've solved over 200+ DSA problems and built multiple web applications. Always eager to learn and create innovative solutions.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;