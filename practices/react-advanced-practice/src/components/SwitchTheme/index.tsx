import { useEffect } from 'react';

// Import common icons
import { MoonIcon, SunIcon } from '@/components/common/Icons';

// Import common components
import { Button } from '@/components/common';

// Import types
import { ButtonVariant, ThemeMode } from '@/types';

// Import store
import { useThemeStore } from '@/stores';

const SwitchTheme = () => {
  const { theme, setTheme } = useThemeStore();

  // Update theme when it changes
  useEffect(() => {
    if (theme === ThemeMode.Dark) {
      document.documentElement.classList.add(ThemeMode.Dark);
    } else {
      document.documentElement.classList.remove(ThemeMode.Dark);
    }

    // Call the setTheme prop to update the external theme state
    setTheme(theme);
  }, [theme, setTheme]);

  const handleToggleTheme = () => {
    const newTheme = theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;

    // This will trigger the useEffect to update the DOM
    setTheme(newTheme);
  };

  return (
    <Button
      variant={ButtonVariant.Transparent}
      onClick={handleToggleTheme}
      className="p-2 rounded-full bg-primary text-white"
    >
      {theme === ThemeMode.Light ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default SwitchTheme;
