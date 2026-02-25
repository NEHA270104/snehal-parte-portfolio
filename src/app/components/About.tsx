import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="font-['Poppins'] text-4xl sm:text-5xl text-center mb-16"
          >
            About Me
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left - Career Objective */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-['Poppins'] text-2xl text-[#2563eb] mb-4">
                Career Objective
              </h3>
              <p className="font-['Inter'] text-gray-700 leading-relaxed text-lg">
                Seeking a challenging career opportunity to utilize academic background, 
                gain experience, and contribute positively using strong interpersonal skills.
              </p>
            </motion.div>

            {/* Right - Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#2563eb] p-3 rounded-full">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-gray-500">Phone</p>
                    <p className="font-['Inter'] text-lg">+91 8879114702</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#7c3aed] p-3 rounded-full">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-gray-500">Email</p>
                    <p className="font-['Inter'] text-lg break-all">snehalparte19@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)' }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-2xl border border-gray-200 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#2563eb] p-3 rounded-full">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-sm text-gray-500">Location</p>
                    <p className="font-['Inter'] text-lg">Swargate, Pune</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}