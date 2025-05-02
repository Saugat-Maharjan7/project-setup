import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user has a theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Apply initial theme
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full border border-solid border-black/[.08] dark:var-[--colors-primary-500] transition-colors flex items-center justify-center hover:bg-var-[--colors-primary-500] dark:hover:bg-[var(--colors-red-500)] hover:border-transparent font-medium text-sm px-4 py-2"
    >
      {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
} 