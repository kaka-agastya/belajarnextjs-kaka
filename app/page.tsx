'use client';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { i } from "framer-motion/client";

export default function Home() {
  return (
    <div className="min-h-screen p-8 sm:p-20 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Home Section */}
      <motion.section
        className="min-h-screen flex flex-col items-center justify-center text-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar/>
        <h1 className="text-4xl sm:text-6xl font-bold typing">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          Hi, I'm Kaka Agastya Herlambang Wahyudi, a passionate web developer.
        </p>
        <motion.div
          className="mt-4"
          whileHover={{ scale: 1.1 }}
        >
          <a
            href="#about"
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          >
          <Link
            to="contact" // Target ID dari elemen yang ingin digulirkan
            smooth={true} // Aktifkan scroll halus
            duration={500} // Durasi scroll
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          >
            Learn More
          </Link>
          </a>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center gap-6 px-6"
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="max-w-2xl text-center text-gray-600 dark:text-gray-400">
          I'm a web developer specializing in creating dynamic and user-friendly web applications using modern technologies like React, Next.js, and Tailwind CSS.
        </p>
        <Image
          src="/about-image.jpg"
          alt="About me"
          width={200}
          height={200}
          className="rounded-full"
        />
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="min-h-screen bg-gray-200 dark:bg-gray-800 py-16 px-6"
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Project {project}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Brief description of Project {project}.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="min-h-screen flex flex-col items-center justify-center gap-6 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I'd love to hear from you! Feel free to reach out.
        </p>
        <motion.a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700"
          whileHover={{ scale: 1.1 }}
        >
          Send an Email
        </motion.a>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="text-center py-6 bg-gray-100 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p className="text-gray-600 dark:text-gray-400">
          © 2024 Kaka Agastya Herlambang Wahyudi. All rights reserved.
        </p>
      </motion.footer>
    </div>
  );
}
