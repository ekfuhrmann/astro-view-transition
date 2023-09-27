/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    'bg-red-400',
    'text-red-900',
    'bg-black',
    'text-white',
    'bg-blue-400',
    'text-blue-900',
    'bg-cyan-900',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
