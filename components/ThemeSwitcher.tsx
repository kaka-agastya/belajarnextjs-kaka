'use client';
import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { motion } from 'framer-motion'; // Impor Framer Motion

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cek tema yang disimpan di localStorage dan set state saat halaman pertama kali dimuat
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="flex items-center">
      <Switch
        checked={isDarkMode}
        onChange={toggleDarkMode}
        className={`${
          isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
        } relative inline-flex items-center h-6 rounded-full w-11`}
      >
        <span className="sr-only">Enable dark mode</span>

        {/* Menggunakan motion.div untuk tombol lingkaran */}
        <motion.div
          className={`${
            isDarkMode ? 'translate-x-5' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full`}
          animate={{ x: isDarkMode ? 20 : 0 }} // Atur posisi
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        />
      </Switch>
      <span className="ml-3 text-gray-800 dark:text-white">
        {isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  );
}
