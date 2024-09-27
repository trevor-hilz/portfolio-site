import { Theme as MUITheme, createMuiTheme } from '@mui/material/styles';
import { Palette, PaletteOptions } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  interface Theme {
    customBackground: {
      table?: string;
    };
  }
  interface ThemeOptions {
    customBackground?: {
      table?: string;
    };
  }
}
