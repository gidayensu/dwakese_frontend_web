import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)', 
			'dark-primary': '#121212',
			'dark-secondary': '#1E1E1E',
			'dwakese-blue': '#3B82F6',
			'dwakese-red': '#F43F5E',
			'dwakese-blue-medium': '#2563EB',
			'dwakese-blue-shade': '#1D4ED8',
			'dwakese-red-tint': '#FB7185',
			'dwakese-red-shade': '#E11D48',
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
