import { motion } from 'motion/react';
import { ArrowUp, Linkedin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    onNavigate('home');
  };

  return (
    <footer className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="font-['Poppins'] text-2xl mb-4">Snehal Parte</h3>
            <p className="font-['Inter'] text-gray-300">
              Digital Marketing Professional helping businesses grow through strategic digital solutions.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-['Poppins'] text-lg mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Experience', 'Certifications', 'Contact'].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => onNavigate(link.toLowerCase())}
                    className="block font-['Inter'] text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="font-['Poppins'] text-lg mb-4">Contact</h4>
            <div className="space-y-3 font-['Inter'] text-gray-300">
              <a
                href="tel:+918879114702"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={18} />
                +91 8879114702
              </a>
              <a
                href="mailto:snehalparte19@gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail size={18} />
                snehalparte19@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-['Inter'] text-gray-400 text-center sm:text-left">
            © 2026 Snehal Parte. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:snehalparte19@gmail.com"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2563eb] transition-colors"
            >
              <Mail size={20} />
            </a>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-[#2563eb] rounded-full flex items-center justify-center hover:bg-[#1d4ed8] transition-colors"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
