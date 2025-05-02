import { useState, useEffect } from 'react';

export default function ThemeForm() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
    
    // Set initial colors based on theme
    updateColors(prefersDark);
  }, []);

  const updateColors = (isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty('--colors-primary-500', 'var(--colors-neutral-black)');
      root.style.setProperty('--colors-text-text-dark', '#ffffff');
      root.style.setProperty('--colors-text-text-light', '#ffffff');
      root.style.setProperty('--colors-border-border-dark', '#333333');
      root.style.setProperty('--colors-neutral-black', '#000000');
      root.style.setProperty('--colors-tailwind-red-500', 'var(--colors-tailwind-blue-500)');
      root.style.setProperty('--colors-tailwind-red-700', 'var(--colors-tailwind-red-600)');
    } else {
      root.style.setProperty('--colors-primary-500', 'var(--colors-neutral-white)');
      root.style.setProperty('--colors-text-text-dark', '#000000');
      root.style.setProperty('--colors-text-text-light', '#ffffff');
      root.style.setProperty('--colors-border-border-dark', '#e5e7eb');
      root.style.setProperty('--colors-neutral-black', '#ffffff');
      root.style.setProperty('--colors-tailwind-red-500', 'var(--colors-tailwind-green-500)');
      root.style.setProperty('--colors-tailwind-red-700', 'var(--colors-tailwind-cyan-700)');
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark');
    updateColors(newMode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleTheme}
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm px-4 py-2"
        >
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 rounded-lg bg-white dark:bg-[#1a1a1a] shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-[var(--colors-text-text-dark)] dark:text-[var(--colors-text-text-light)]">
          Contact Form
        </h2>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-[var(--colors-text-text-dark)] dark:text-[var(--colors-text-text-light)] mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[var(--colors-border-border-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--colors-neutral-black)] dark:text-white"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-[var(--colors-text-text-dark)] dark:text-[var(--colors-text-text-light)] mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-[var(--colors-border-border-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--colors-neutral-black)] dark:text-white"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-[var(--colors-text-text-dark)] dark:text-[var(--colors-text-text-light)] mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-[var(--colors-border-border-dark)] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-[var(--colors-neutral-black)] dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[var(--colors-tailwind-red-500)] hover:bg-[var(--colors-tailwind-red-700)] text-[var(--colors-text-text-light)] font-medium py-2 px-4 rounded-md transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
} 