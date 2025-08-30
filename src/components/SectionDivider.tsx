import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div 
      className="w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>
    </motion.div>
  );
};

export default SectionDivider;