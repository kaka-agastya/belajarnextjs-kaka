'use client';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Link, Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { i } from "framer-motion/client";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Typewriter from "typewriter-effect";

export default function Home() {
  const timelineItems = [
    {
      title: "Belajar HTML CSS",
      description: "Jun 2023 - Feb 2024",
      side: "left",
    },
    {
      title: "Belajar Python",
      description: "Feb 2024 - Jun 2024",
      side: "right",
    },
    {
      title: "Belajar Machine Learning",
      description: "Aug 2024 - Sep 2024",
      side: "left",
    },
    {
      title: "Belajar C++",
      description: "Aug 2024 - Oct 2024",
      side: "right",
    },
    {
      title: "Belajar Js, Next.js",
      description: "Nov 2024 - Des 2024",
      side: "left",
    },
  ];
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
        <ThemeSwitcher/>
        <Link
            to="contact" // Target ID dari elemen yang ingin digulirkan
            smooth={true} // Aktifkan scroll halus
            duration={5000} // Durasi scroll
          >
        <h1 className="text-4xl sm:text-6xl font-bold typing">
        <Typewriter
              options={{
                strings: [
                  "Welcome to My Portfolio",
                ],
                autoStart: true,
                loop: true,
              }}
            />
        </h1>
        </Link>
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
            Learn More
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
        <div className="relative w-[200px] h-[200px]">
        <Image
           src="/images/B.png"
           alt="About Me"
           width={200}    
           height={200}
           className="rounded-full transition-all duration-300 dark:invert"/>
        </div>
        <motion.section
  id="timeline"
  className="min-h-screen flex flex-col items-center justify-center px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  <h2 className="text-3xl font-bold mb-6">Experience Timeline</h2>
  <div className="relative w-full max-w-xl mx-auto">
    {/* Garis Tengah Timeline */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-300 dark:bg-gray-600"></div>
    {/* Timeline Items */}
    {timelineItems.map((item, index) => (
  <motion.div
    key={`timeline-item-${index}`}
    className={`relative flex items-center gap-4 mb-20 ${item.side === "left" ? "flex-row-reverse" : ""}`}
    initial={{ opacity: 0, y: 50 }} // Mulai dari posisi bawah dan transparan
    whileInView={{ opacity: 1, y: 0 }} // Muncul dan bergerak ke posisi normal
    viewport={{ once: false, amount: 0.3 }} // Animasi akan dipicu ulang saat scroll
    transition={{
      delay: index * 0.3, // Animasi item berikutnya tertunda
      duration: 0.6,
      ease: "easeOut",
    }}
  >
    <div className={`w-1/2 ${item.side === "left" ? "text-right pr-8" : "pl-8"}`}>
      <h3 className="font-bold text-xl sm:text-2xl">{item.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">{item.description}</p>
    </div>

    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-2 border-gray-300 dark:border-gray-600"></div>

    <div className="w-1/2"></div>
  </motion.div>
))}

  </div>
</motion.section>


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
