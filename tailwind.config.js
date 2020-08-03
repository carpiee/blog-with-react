module.exports = {
  purge: [],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
        // => @media (prefers-color-scheme: dark) { ... }
      },
    },
  },
  variants: {
    appearance: ["responsive"],
    backgroundColor: ["responsive", "hover", "focus", "active", "group-hover"],
    opacity: ["responsive", "hover", "focus", "disabled"],
    zIndex: ["responsive", "hover", "focus"],
    borderWidth: ["responsive", "first", "hover", "focus", "group-hover"],
    width: ["responsive", "first", "hover", "focus"],
    space: ["responsive", "hover", "focus"],
    textColor: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [require("@tailwindcss/typography")],
};
