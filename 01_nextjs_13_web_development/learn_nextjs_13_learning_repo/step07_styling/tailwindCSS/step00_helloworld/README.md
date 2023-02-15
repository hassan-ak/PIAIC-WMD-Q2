# Chakra UI Hello World with Next13

## Code Hello World with Chakra in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. Cleanup working directory by removing un-necessary files
3. Install the Tailwind CSS packages and run the init command to generate both the tailwind.config.js and postcss.config.js files

   ```cmd
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Inside tailwind.config.js, add paths to the files that will use Tailwind CSS class names:

   ```js
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
       './pages/**/*.{js,ts,jsx,tsx}',
       './components/**/*.{js,ts,jsx,tsx}',

       // Or if using `src` directory:
       './src/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

5. Create .babelrc

   ```json
   {
     "presets": ["next/babel"],
     "plugins": []
   }
   ```

6. Update .eslintrc.json

   ```json
   {
     "extends": ["next/babel", "next/core-web-vitals"]
   }
   ```

7. Add the Tailwind CSS directives that Tailwind will use to inject its generated styles to global.css

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

8. Fix Unknown at rule @tailwindcss by going to settings and turning CSS Lint Unknown At Rules
   to ignore
9. Inside the root layout (app/layout.tsx), import the globals.css stylesheet to apply the styles to every route in your application.
10. Install Tailwind CSS IntelliSense in the app
11. Inline fold extension

## Reading Materila

- [getting started with Next.js 13](https://beta.nextjs.org/docs/getting-started)
- [installing Tailwind CSS with Next.js 13](https://beta.nextjs.org/docs/styling/tailwind-css)
