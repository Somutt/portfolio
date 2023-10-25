export const theme = {
  colors: {
    white: '#f8f8f8',
    dark: '#1f1f1f',
  },
  font: {
    family: {
      primary: "'Roboto', sans-serif",
      secondary: "'Helvetica', sans-serif",
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
