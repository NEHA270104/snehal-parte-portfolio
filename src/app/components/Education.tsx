import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'PGDM in IBM',
    institution: 'Welingkar Education',
    university: 'Mumbai University',
    year: '2023',
  },
  {
    degree: 'BMS',
    institution: 'Shri Chinai College',
    university: 'Mumbai University',
    year: '2018',
  },
  {
    degree: 'HSC',
    institution: 'Maharashtra Board',
    university: '',
    year: '2013',
  },
  {
    degree: 'SSC',
    institution: 'Maharashtra Board',
    university: '',
    year: '2011',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Education() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={cardVariants}
            className="font-['Poppins'] text-4xl sm:text-5xl text-center mb-16"
          >
            Education
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)',
                }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 text-center group"
              >
                <div className="bg-gradient-to-br from-[#2563eb] to-[#7c3aed] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <h3 className="font-['Poppins'] text-xl mb-2">{edu.degree}</h3>
                <p className="font-['Inter'] text-gray-600 mb-1">
                  {edu.institution}
                </p>
                {edu.university && (
                  <p className="font-['Inter'] text-sm text-gray-500 mb-2">
                    {edu.university}
                  </p>
                )}
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <span className="font-['Poppins'] text-[#2563eb]">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
