/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1113", // Deep matte graphite
        card: "#151A1D", // Slightly lighter slate
        divider: "#22272B", // Soft Divider Tone
        "text-primary": "#F5F5F5", // Soft white
        "text-secondary": "#9BA3A7", // Muted sage gray
        "accent-bronze": "#B08D57", // Iron Bronze (discipline & strength)
        "accent-sage": "#5F8F73", // Calm Sage (balance & growth)
        "accent-indigo": "#4C5C8A", // Deep Indigo (intellect & philosophy)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "slow-gradient": "slowGradient 15s ease infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        slowGradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundImage: {
        "radial-vignette":
          "radial-gradient(circle at center, transparent 30%, rgba(14, 17, 19, 0.95) 100%)",
      },
    },
  },
  plugins: [],
};
