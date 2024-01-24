/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}",'node_modules/flowbite-react/lib/esm/**/*.js',],
  theme: {
    extend: {},
  },
  plugins: [
    import('flowbite/plugin'),
  ],
}