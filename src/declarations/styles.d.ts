// import original module declarations
import 'styled-components';
import { defaultTheme } from '@/core';

type Theme = typeof defaultTheme;

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}