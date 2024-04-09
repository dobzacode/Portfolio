'use client';
import Button from '@/components/ui/button/button';
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js';
import Icon from '@mdi/react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { FC, useEffect, useState } from 'react';

interface DarkModeButtonProps {
  className?: string;
}

const DarkModeButton: FC<DarkModeButtonProps> = ({ className }) => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      className={className}
      onClick={() => (theme === 'dark' ? setTheme('light') : setTheme('dark'))}
    >
      {theme === 'light' || !theme ? (
        <motion.button
          onClick={() => setTheme('light')}
          className="h-[3rem] w-[3rem] pb-1 max-tablet:h-[2.4rem] max-tablet:w-[2.4rem] max-mobile-large:h-[2.0rem] max-mobile-large:w-[2.0rem]"
          key="sun"
          initial={{ opacity: 0, rotate: 360 }}
          animate={{ opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <Icon path={mdiWeatherSunny} />
        </motion.button>
      ) : (
        <motion.button
          onClick={() => setTheme('dark')}
          className={className}
          key="moon"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <Icon path={mdiWeatherNight} />
        </motion.button>
      )}
    </Button>
  );
};

export default DarkModeButton;
