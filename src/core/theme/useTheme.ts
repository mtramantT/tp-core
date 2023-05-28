import { useState, useEffect } from 'react';
import { Theme, defaultTheme } from './theme';

import { themes } from './theme';

const useTheme = (name: string) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    
  }, [name]);

  return { theme };
};

export default useTheme;