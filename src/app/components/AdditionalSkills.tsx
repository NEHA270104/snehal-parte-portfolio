import { motion } from 'motion/react';

const additionalSkills = [
  'MS Office',
  'Excel',
  'Internet Knowledge',
  'Digital Marketing',
  'SAP',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

export function AdditionalSkills() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={badgeVariants}
            className="font-['Poppins'] text-4xl sm:text-5xl mb-4"
          >
            Additional Skills
          </motion.h2>
          <motion.p
            variants={badgeVariants}
            className="font-['Inter'] text-gray-600 mb-12"
          >
            Other technical competencies
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {additionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                variants={badgeVariants}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)',
                }}
                className="bg-white px-8 py-4 rounded-full shadow-lg border-2 border-[#2563eb]/20 cursor-pointer group"
              >
                <span className="font-['Inter'] text-lg group-hover:text-[#2563eb] transition-colors">
                  {skill}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
