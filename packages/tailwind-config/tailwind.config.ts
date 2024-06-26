/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // apps/web のファイル
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    // packages/ui のファイル（apps/web からの相対パス）
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
    // 他のアプリケーションやパッケージがある場合、ここに追加
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
