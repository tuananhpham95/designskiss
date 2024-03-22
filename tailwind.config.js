export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbhsans: ["Kumbh Sans", "sans-serif"],
      },
      colors: {
        bgColor: "#FFFFFF",
        darkblue: "#1D2026",
        grey: "#69707D",
        darkorange: "#FF7E1B",
        lightorange: "#FFEEE2",
        backgroundColor: ["group-hover"],
      },
      fontSize: {
        13: "13px",
        15: "15px",
        16: "16px",
        28: "28px",
        44: "44px",
      },
    },
  },
  plugins: [],
};
