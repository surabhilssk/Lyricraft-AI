/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		fontFamily: {
			sans: ['Outfit', 'sans-serif'],
		},
  		colors: {},
		
  	}
  },
  plugins: [tailwindcssAnimate],
}

