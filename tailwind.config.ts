import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         keyframes: {
            slideIn: {
               '0%': { transform: 'translateX(100%)' },
               '100%': { transform: 'translateX(0%)' },
            },
            slideOut: {
               "0%": { transform: 'translateX(0%)' },
               "100%": { transform: "translateX(100%)" }
            }
         },
         animation: {
            slideIn: "slideIn 0.3s ease-in-out",
            slideOut: "slideOut 0.3s ease-in-out"
         },
         fontFamily: {
            'mansalva': ["Mansalva", "cursive"]
         }
      },
   },
   plugins: [],
}
export default config
