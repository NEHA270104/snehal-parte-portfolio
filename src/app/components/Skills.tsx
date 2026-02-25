import { motion } from 'motion/react';
import {
  TrendingUp,
  Search,
  Target,
  BarChart3,
  Globe,
  Share2,
  Mail,
  Users,
  Zap,
  DollarSign,
  Shield,
  MousePointerClick,
  Palette,
  Video,
  Layout,
} from 'lucide-react';

const skills = [
  { name: 'Digital Marketing Overview', icon: TrendingUp, color: '#2563eb' },
  { name: 'SEO (On/Off Page)', icon: Search, color: '#7c3aed' },
  { name: 'Google Ads', icon: Target, color: '#2563eb' },
  { name: 'Google Analytics', icon: BarChart3, color: '#7c3aed' },
  { name: 'Google Search Console', icon: Globe, color: '#2563eb' },
  { name: 'Social Media Marketing', icon: Share2, color: '#7c3aed' },
  { name: 'Email Marketing', icon: Mail, color: '#2563eb' },
  { name: 'Influencer Marketing', icon: Users, color: '#7c3aed' },
  { name: 'Growth Hacking', icon: Zap, color: '#2563eb' },
  { name: 'Affiliate Marketing', icon: DollarSign, color: '#7c3aed' },
  { name: 'Online Reputation Management', icon: Shield, color: '#2563eb' },
  { name: 'Lead Generation', icon: MousePointerClick, color: '#7c3aed' },
  { name: 'Canva', icon: Palette, color: '#2563eb' },
  { name: 'Image & Video Editing', icon: Video, color: '#7c3aed' },
  { name: 'WordPress Website Planning', icon: Layout, color: '#2563eb' },
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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#eef2ff]">
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
            Digital Marketing Skills
          </motion.h2>
          <motion.p
            variants={cardVariants}
            className="font-['Inter'] text-gray-600 text-center mb-16"
          >
            Comprehensive expertise across all digital marketing channels
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px ${skill.color}30`,
                  }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 cursor-pointer group"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <Icon style={{ color: skill.color }} size={28} />
                  </div>
                  <h3 className="font-['Poppins'] text-lg">{skill.name}</h3>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
