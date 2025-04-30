import "@/styles/globals.css";
import "@/src/style-dictionary-dist/merged-variables.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

const ThemeToggle = ({ isDarkMode, setIsDarkMode }: { isDarkMode: boolean; setIsDarkMode: (value: boolean) => void }) => {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="fixed top-4 right-4 p-2 rounded-full"
      style={{
        backgroundColor: 'var(--colors-background-secondary)',
        color: 'var(--colors-text-primary)'
      }}
      aria-label="Toggle theme"
    >
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    // Listen for system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <>
      <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Component {...pageProps} />
    </>
  );
}
