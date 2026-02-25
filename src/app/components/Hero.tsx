import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen pt-16 flex items-center bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#f8fafc]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="font-['Poppins'] font-bold text-5xl sm:text-6xl lg:text-7xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              SNEHAL DATTATRAY PARTE
            </motion.h1>

            <motion.h2
              className="font-['Poppins'] text-2xl sm:text-3xl text-[#2563eb] mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Digital Marketer
            </motion.h2>

            <motion.p
              className="font-['Inter'] text-lg text-gray-600 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Helping businesses grow with data-driven digital marketing strategies.
            </motion.p>

            <motion.div
              className="flex items-center justify-center gap-2 text-gray-700 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <MapPin className="text-[#2563eb]" size={20} />
              <span className="font-['Inter']">Pune, India</span>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <button
                onClick={() => onNavigate('skills')}
                className="font-['Inter'] bg-[#2563eb] text-white px-8 py-4 rounded-full hover:bg-[#1d4ed8] transition-all hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 group"
              >
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="font-['Inter'] border-2 border-[#2563eb] text-[#2563eb] px-8 py-4 rounded-full hover:bg-[#2563eb] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                Contact Me
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}