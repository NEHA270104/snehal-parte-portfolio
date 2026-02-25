import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Accounts Executive',
    company: 'Mount Meru Groups',
    period: 'Jun 2022 – Nov 2022',
    points: [
      'Accounting operations and reconciliation',
      'Ledger & petty cash management',
      'MIS handling',
      'Strong Excel usage',
    ],
  },
  {
    title: 'Accounts Executive',
    company: 'GH Commercials LLP',
    period: 'Sep 2020 – Apr 2021',
    points: [
      'Daily accounting operations',
      'SAP reporting',
      'Client coordination',
      'Process efficiency support',
    ],
  },
  {
    title: 'Marketing Assistant',
    company: 'SNA Infotech Pvt. Ltd.',
    period: 'Feb 2018 – Sep 2020',
    points: [
      'Vendor & customer coordination',
      'Quotations on Excel',
      'Cold calling',
      'Delivery tracking',
    ],
  },
  {
    title: 'Executive',
    company: 'Meghna Fabrics',
    period: 'Oct 2016 – Jan 2018',
    points: [
      'Data entry & invoicing',
      'Customer handling',
      'Documentation & follow-ups',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Professional Experience
          </motion.h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563eb] to-[#7c3aed] hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute left-6 w-5 h-5 bg-[#2563eb] rounded-full border-4 border-white shadow-lg hidden md:block"
                    style={{ top: '24px' }}
                  ></motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{
                      x: 10,
                      boxShadow: '0 20px 40px rgba(37, 99, 235, 0.15)',
                    }}
                    className="md:ml-20 bg-gradient-to-br from-white to-[#f8fafc] p-6 rounded-2xl border border-gray-200 shadow-lg"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-[#2563eb] p-3 rounded-xl md:hidden">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Poppins'] text-xl mb-1">
                          {exp.title}
                        </h3>
                        <p className="font-['Inter'] text-[#2563eb]">
                          {exp.company}
                        </p>
                        <p className="font-['Inter'] text-sm text-gray-500 mt-1">
                          {exp.period}
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="font-['Inter'] text-gray-700 flex items-start gap-2"
                        >
                          <span className="text-[#2563eb] mt-1.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
