// Styles
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const lightTheme = {
  dark: false,
  colors: {
    primary: '#4f46e5',
    success: '#10b981',
    secondary: '#0ea5e9',
    accent: '#f59e0b',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#0ea5e9',
    surface: '#ffffff',
    background: '#f8fafc',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#818cf8',
    success: '#34d399',
    secondary: '#38bdf8',
    accent: '#fbbf24',
    error: '#f87171',
    warning: '#fbbf24',
    info: '#38bdf8',
    surface: '#111a2e',
    background: '#0b1220',
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
});
