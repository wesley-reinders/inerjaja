import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Inter, Helvetica, Roboto, Arial, sans-serif',
  headings: { fontFamily: 'Inter, Helvetica, Roboto, Arial, sans-serif' },
  primaryColor: 'brandColor',
  defaultRadius: 'md',
  focusRing: 'auto',
  radius: {
    xs: '.125rem',
    sm: '.25rem',
    md: '.375rem',
    lg: '.5rem',
    xl: '3rem',
  },
  spacing: {
    xs: '.25rem',
    sm: '.5rem',
    md: '.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '2rem',
    '4xl': '2.5rem',
  },
  components: {
    Input: {
      styles: {
        input: {
          backgroundColor: 'var(--mantine-color-gray-0)',
        },
      },
    },
  },
  colors: {
    brandColor: [
      '#ecebff',
      '#d3d1fe',
      '#a49ffa',
      '#726af7',
      '#493df5',
      '#3021f4',
      '#2313f5',
      '#1709da',
      '#1006c4',
      '#0202ac',
    ],
    gray: [
      '#f8fafc',
      '#f3f5f7',
      '#edf0f3',
      '#f0f3f7',
      '#e2e8f0',
      '#a6b0bb',
      '#8991a2',
      '#5d6878',
      '#3f4958',
      '#252e3B',
    ],
  },
  other: {
    iconSize: 16,
    iconStroke: 1.5,
  },
});
