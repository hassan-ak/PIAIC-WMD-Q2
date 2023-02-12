# Chakra UI Hello World with Next13

## Code Hello World with Chakra in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. Install ChakraUI in the app using

   ```cmd
   npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
   ```

3. Create `./components/Chakra.tsx` to define a chakra wrapper.

   ```tsx
   'use client';
   import React from 'react';
   import { ChakraProvider } from '@chakra-ui/react';
   function ChakraWrapper({ children }: { children: React.ReactNode }) {
     return <ChakraProvider>{children}</ChakraProvider>;
   }
   export default ChakraWrapper;
   ```

4. Update './app/layout.tsx to wrap the elements in chakrawrapper

   ```tsx
   import ChakraWrapper from '../components/Chakra';
   export default function RootLayout({
     children,
   }: {
     children: React.ReactNode;
   }) {
     return (
       <html lang='en'>
         <head />
         <body>
           <ChakraWrapper>{children}</ChakraWrapper>
         </body>
       </html>
     );
   }
   ```

5. Update '.app/page.tsx' and use chkra elemets to define the page
6. Start the server with following command

   ```cmd
   npm run dev
   ```

   You can access it on the browser at the follwoing link

   ```cmd
   http://localhost:3000/
   ```

## Deploy on vercel

1. Deploy using following command

   ```cmd
   vercel
   ```

## Deployed URL

- https://hak-step07-chakra-helloworld.vercel.app

## Reading Material

- [Using Chakra UI with Next 13 app directorys](https://twitter.com/abhwshek/status/1589205671077380097)
- [Chakra UI](https://chakra-ui.com/getting-started)
