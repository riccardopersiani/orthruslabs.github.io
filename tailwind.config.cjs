const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {},
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "cyberpunk", // first one will be the default theme
    ],
  },
};

module.exports = config;
