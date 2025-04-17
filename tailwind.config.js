export default {
    darkMode: 'class', // 👈 Add this line to enable dark mode via class
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        },
      },
    },
    plugins: [],
  }
  