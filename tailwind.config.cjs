/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        emerald: "#33D35E",
        shamrock: "30C88F",
        scooter: "#2AB6D9",
        dark: "#2D314D",
        neutral: "#9597A5",
        "neutral-light": "#F4F5F7",
      },
      backgroundImage: {
        "nav-overlay":
          "linear-gradient(180deg, #2D314D 0%, rgba(45, 49, 77, 0.0001) 100%)",
        "hero-mobile-bg":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484344/easybank/bg-intro-mobile_cy1len.svg')",
        "hero-desktop-bg":
          "url('https://res.cloudinary.com/ds2ene5mm/image/upload/v1656484344/easybank/bg-intro-desktop_hk4tu2.svg')",
        "primary-btn": "linear-gradient(135deg, #33D35E 0%, #2AB6D9 99.58%)",
      },
    },
  },
  plugins: [],
};
