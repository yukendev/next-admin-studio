import { DEFAULT_THEME } from "@mantine/core";

const mantineColorsForTailwind: Record<string, Record<number, string>> = {};
for (const [name, colors] of Object.entries(DEFAULT_THEME.colors)) {
  mantineColorsForTailwind[name] = colors.reduce(
    (obj: Record<number, string>, color, index) => {
      obj[index] = color;
      return obj;
    },
    {}
  );
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./stories/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Add Mantine UI primary color to the palette
        "primary-0": "var(--mantine-primary-color-0)",
        "primary-1": "var(--mantine-primary-color-1)",
        "primary-2": "var(--mantine-primary-color-2)",
        "primary-3": "var(--mantine-primary-color-3)",
        "primary-4": "var(--mantine-primary-color-4)",
        "primary-5": "var(--mantine-primary-color-5)",
        "primary-6": "var(--mantine-primary-color-6)",
        "primary-7": "var(--mantine-primary-color-7)",
        "primary-8": "var(--mantine-primary-color-8)",
        "primary-9": "var(--mantine-primary-color-9)",

        // Add other Mantine UI colors to the palette
        ...mantineColorsForTailwind,
      },

      // Match the media query breakpoints to Mantine UI
      // https://mantine.dev/styles/responsive/
      screens: {
        sm: "30em",
        md: "48em",
        lg: "64em",
        xl: "74em",
        "2xl": "90em",
      },
      animation: {
        "fade-in": "fade-in 1s cubic-bezier(0.25, 0.1, 0.25, 1) both",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            transform: "translateY(12px)",
            opacity: "0",
          },
          "80%": {
            opacity: "0.8",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Because Mantine UI's base styles conflict with Tailwind's, disable Tailwind's base styles
    // https://tailwindcss.com/docs/preflight#disabling-preflight
    preflight: false,
  },
};
