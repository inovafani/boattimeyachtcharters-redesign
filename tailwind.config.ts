import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        navy: '#0A1628',
        'navy-mid': '#0F2040',
        ocean: '#1A3A5C',
        cream: '#F5F0E8',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Times New Roman', 'serif'],
        body: ['var(--font-montserrat)', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
