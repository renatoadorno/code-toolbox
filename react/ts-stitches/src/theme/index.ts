import { useState, useEffect } from 'react';
import { createTheme } from '../../stitches.config';
import { purple, purpleDark } from '@radix-ui/colors';

export const dark = createTheme({
  colors: {
    ...purpleDark
  }
});

export const light = createTheme({
  colors: {
    ...purple
  }
});

interface IUseTheme {
  theme: string,
  changeTheme: () => void,
}

export const useTheme = (): IUseTheme => {
  const [theme, setTheme] = useState(light);

  useEffect(() => {
    const themeInStorage = localStorage.getItem('pageTheme');

    if (themeInStorage === null ) {
      setTheme(light);
      localStorage.setItem('pageTheme', 'light');
    } else {
      setTheme(themeInStorage === 'light' ? light : dark);
    }

  }, []);

  const changeTheme = () => {
    const newTheme = theme === light ? 'dark' : 'light';
    localStorage.setItem('pageTheme', newTheme);
    setTheme(newTheme === 'light' ? light : dark);
  };

  return {theme, changeTheme};
};

