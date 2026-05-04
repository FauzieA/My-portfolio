import React, { useEffect } from 'react';

export const ThemeProvider = ({ children }) => {
  // Always use dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <>{children}</>;
};