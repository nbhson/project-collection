// Styles
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const lightTheme = {
  dark: false,
  colors: {
    primary: '#4bcffa',
    success: '#0be881',
    secondary: '#7f8c8d',
    accent: '#fa8231',
    error: '#eb3b5a',
    warning: '#fed330',
    info: '#8854d0',
  },
};

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
    },
  },
});
