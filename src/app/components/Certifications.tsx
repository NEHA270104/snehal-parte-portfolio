import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'Certificate Course in Digital Marketing',
    organization: 'Reliance Foundation Skilling Academy',
    duration: '140 hours',
    completionDate: 'Oct 27, 2025',
    image: 'certificate_fe8d8f58-9ba3-465d-…',
  },
  {
    name: 'Microsoft Skill Competency',
    organization: 'SOAR – AI to Aspire',
    duration: '15 hours',
    completionDate: 'Completed',
    image: 'certificate_a69b4443-fa11-4f48-…',
  },
  {
    name: 'MS-CIT',
    organization: 'Maharashtra State',
    duration: 'Certified',
    completionDate: 'Completed',
    image: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={cardVariants}
            className="font-['Poppins'] text-4xl sm:text-5xl text-center mb-4"
          >
            Certifications
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="font-['Inter'] text-gray-600 text-center mb-16"
          >
            Professional certifications and skill development
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 40px rgba(124, 58, 237, 0.2)',
                }}
                className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-2xl border border-gray-200 shadow-lg group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-[#7c3aed] to-[#2563eb] w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="text-white" size={28} />
                  </div>
                  {cert.image && (
                    <ExternalLink className="text-gray-400 group-hover:text-[#2563eb] transition-colors" size={20} />
                  )}
                </div>

                <h3 className="font-['Poppins'] text-lg mb-2">{cert.name}</h3>
                <p className="font-['Inter'] text-[#7c3aed] mb-1">
                  {cert.organization}
                </p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                  <span className="font-['Inter'] text-sm text-gray-600">
                    {cert.duration}
                  </span>
                  <span className="font-['Inter'] text-sm text-[#2563eb]">
                    {cert.completionDate}
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