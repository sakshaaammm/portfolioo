import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="glass p-8 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-4"
        >
          <p className="text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:saksham3968stella@gmail.com" className="text-blue-500 hover:text-blue-700">
              saksham3968stella@gmail.com
            </a>
          </p>
          <p className="text-lg">
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/saksam-bhatia-92aa5b2ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Saksham Bhatia
            </a>
          </p>
          <p className="text-lg">
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/sakshaaammm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              sakshaaammm
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;