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

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
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
            Contact Me
          </motion.h2>

          <div className="max-w-2xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
                className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-8 rounded-2xl shadow-lg text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] text-xl mb-2">Phone</h4>
                    <a
                      href="tel:+918879114702"
                      className="font-['Inter'] text-lg hover:underline"
                    >
                      +91 8879114702
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(124, 58, 237, 0.15)',
                }}
                className="bg-gradient-to-br from-[#7c3aed] to-[#6d28d9] p-8 rounded-2xl shadow-lg text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] text-xl mb-2">Email</h4>
                    <a
                      href="mailto:snehalparte19@gmail.com"
                      className="font-['Inter'] text-lg hover:underline break-all"
                    >
                      snehalparte19@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                }}
                className="bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] p-8 rounded-2xl shadow-lg text-white"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-4 rounded-xl">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-['Poppins'] text-xl mb-2">Location</h4>
                    <p className="font-['Inter'] text-lg">
                      Swargate, Pune, India
                    </p>
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