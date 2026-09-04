import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('shubhaarambh-theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
    } catch (e) {
      // ignore
    }
    return 'light'; // Default to light classic luxury
  });

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setThemeMode = (mode) => {
    if (mode === 'dark' || mode === 'light') {
      setTheme(mode);
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem('shubhaarambh-theme', theme);
    } catch (e) {}

    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
      document.body.style.backgroundColor = '#060D17';
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
      document.body.style.backgroundColor = '#FAF8F5';
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
