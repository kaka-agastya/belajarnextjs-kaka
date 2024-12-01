'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md px-8 py-4 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div
          className="text-2xl font-bold text-gray-800 dark:text-white"
          whileHover={{ scale: 1.1 }}
        >
          <a href="#home">MyPortfolio</a>
        </motion.div>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-6 text-gray-600 dark:text-gray-300">
          <li>
            <a
              href="#about"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-900 dark:hover:text-white transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Call-to-Action Button */}
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          asChild
        >
          <a href="#contact">Let's Connect</a>
        </Button>
      </div>
    </motion.nav>
  );
}
