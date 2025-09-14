module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep Navy Foundation
        primary: {
          DEFAULT: "#1E3A5F", // Deep navy - custom primary
          50: "#F0F4F8", // Very light navy tint
          100: "#D6E3F0", // Light navy tint
          200: "#B8CCE0", // Medium light navy
          300: "#94B0CE", // Medium navy
          400: "#6B8DB5", // Medium dark navy
          500: "#1E3A5F", // Base primary navy
          600: "#1A3354", // Darker navy
          700: "#152B48", // Very dark navy
          800: "#10233C", // Deepest navy
          900: "#0B1B30", // Almost black navy
        },
        // Secondary Colors - Supporting Professional Depth
        secondary: {
          DEFAULT: "#2D5A87", // Supporting professional depth
          50: "#F2F6FA", // Very light secondary
          100: "#E0EAF4", // Light secondary
          200: "#C7D9EA", // Medium light secondary
          300: "#A8C4DD", // Medium secondary
          400: "#82ABCD", // Medium dark secondary
          500: "#2D5A87", // Base secondary
          600: "#285179", // Darker secondary
          700: "#22476A", // Very dark secondary
          800: "#1D3D5B", // Deepest secondary
          900: "#18334C", // Almost black secondary
        },
        // Accent Colors - Electric Blue Innovation
        accent: {
          DEFAULT: "#0EA5E9", // Electric blue - sky-500
          50: "#F0F9FF", // sky-50
          100: "#E0F2FE", // sky-100
          200: "#BAE6FD", // sky-200
          300: "#7DD3FC", // sky-300
          400: "#38BDF8", // sky-400
          500: "#0EA5E9", // sky-500
          600: "#0284C7", // sky-600
          700: "#0369A1", // sky-700
          800: "#075985", // sky-800
          900: "#0C4A6E", // sky-900
        },
        // Background Colors
        background: "#FAFBFC", // Clean canvas - slate-50
        surface: "#F1F5F9", // Subtle elevation - slate-100
        // Text Colors
        text: {
          primary: "#1E293B", // High contrast - slate-800
          secondary: "#64748B", // Clear hierarchy - slate-500
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // Confident green - emerald-600
          50: "#ECFDF5", // emerald-50
          100: "#D1FAE5", // emerald-100
          500: "#10B981", // emerald-500
          600: "#059669", // emerald-600
          700: "#047857", // emerald-700
        },
        warning: {
          DEFAULT: "#D97706", // Amber urgency - amber-600
          50: "#FFFBEB", // amber-50
          100: "#FEF3C7", // amber-100
          500: "#F59E0B", // amber-500
          600: "#D97706", // amber-600
          700: "#B45309", // amber-700
        },
        error: {
          DEFAULT: "#DC2626", // Clear red - red-600
          50: "#FEF2F2", // red-50
          100: "#FEE2E2", // red-100
          500: "#EF4444", // red-500
          600: "#DC2626", // red-600
          700: "#B91C1C", // red-700
        },
        // Border Colors
        border: "#E2E8F0", // Minimal borders - slate-200
        "border-light": "#F1F5F9", // Light borders - slate-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
}