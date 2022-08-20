/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        'just': "#B49C73"
      },
      backgroundImage: {
        'law': "url('https://preview.colorlib.com/theme/justice/images/xhero_bg.jpg.pagespeed.ic.CFJ3OI4rtp.webp') "
      },
      backgroundPosition: {
        'center-4': '-50vw '
      }

    },
    plugins: [require("flowbite/plugin")],
  }
}