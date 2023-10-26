import { Roboto, Courier_Prime } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

const courier = Courier_Prime({
  weight: '400',
  subsets: ['latin'],
});

export const theme = {
  colors: {
    red: '#FF6057',
    yellow: '#FFBD2E',
    lightgreen: '#00ffa4',
    green: '#27C93F',
    white: '#f8f8f8',
    dark: '#1f1f1f',
    lightgray: '#8c8c8c',
    gray: '#27242f',
  },
  font: {
    family: {
      primary: `${roboto.style.fontFamily}, sans-serif`,
      secondary: `${courier.style.fontFamily}, monospace`,
    },
    sizes: {
      small: '1.2rem',
      default: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      large: '4.0rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
  },
  spacings: {
    line: {
      small: '1.2rem',
      default: '1.6rem',
      medium: '2.4rem',
      big: '3.2rem',
      large: '4.0rem',
    },
  },
  transition: {
    standard: 'all 250ms ease',
    fontColor: 'color 250ms',
    vartical: 'transform 250ms',
    background: 'background-color 400ms',
  },
  transform: {
    vertical: 'translateY(-3px)',
  },
} as const;
