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
      </div>
    </section>
  );
};

export default Hero;