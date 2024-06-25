/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
    "./apps/web/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};

export default config;
