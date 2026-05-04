import React, { useEffect } from 'react';

export const ThemeProvider = ({ children }) => {
  // Light mode (white background)
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return <>{children}</>;
};