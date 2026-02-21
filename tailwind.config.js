/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bg: '#0A0A0A',
                card: '#121212',
                'text-primary': '#FFFFFF',
                'text-secondary': '#A1A1A1',
                'accent-blue': '#3B82F6',
                'accent-purple': '#8B5CF6',
                'accent-green': '#10B981',
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            animation: {
                'gradient-shift': 'gradientShift 4s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                pulseGlow: {
                    '0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
                    '50%': { boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)' },
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #0f0f1a 50%, #0A0A0A 100%)',
            }
        },
    },
    plugins: [],
}
