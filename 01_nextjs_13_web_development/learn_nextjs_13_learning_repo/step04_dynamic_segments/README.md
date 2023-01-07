# Rout Groups in NextJs 13

## Dynamic Segments

### Dynamic Segments Documentation

- When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
- Convention
  - A Dynamic Segment can be created by wrapping a folder’s name in square brackets: [folderName]. For example, [id] or [slug].
  - Dynamic Segments are passed as the params prop to Layout, Page, and Head components.
  - Dynamic Segments are equivalent to Dynamic Routes in the pages directory
- Catch-all Segments
  - Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets [...folderName]
- Optional Catch-all Segments
  - Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].
- TypeScript
  - When using TypeScript, you can add types for params depending on your configured route segment.

### Error Handling

- Next.js 13 introduced a new file convention, error.js, to help you handle errors in your application.
- This convention, built on React Error Boundaries, allows you to show a fallback if an error is thrown within the route subtree.
- Error Boundaries
  - error.js defines the error boundary for a route segment and the children below it.
  - It can be used to show specific error information, and functionality to attempt to recover from the error.
  - client component
  - During an error, layouts and templates above the boundary will remain interactive and their state will be preserved.
  - To catch any errors in the layout or template, move the error boundary up to the parent segment.
- Handling Server Errors
  - If an error is thrown during data fetching or inside a Server Component, Next.js will forward the resulting Error object to the nearest error.js file as the error prop.

## Code Route Groups in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. We are defining dynamic segment so create a folder [name] and rest of the code in this folder, personal folder will have no effect on the URL.
3. Create '.[name]/page.tsx' to define a dynamic segment

   ```tsx
   export default function Name({ params }: { params: { name: string } }) {
     return (
       <div>
         <h1>Dynamic Segment in NextJS 13</h1>
         <div>My name is {params.name}.</div>;
       </div>
     );
   }
   ```

4. Update './app/page.tsx and add Link element to access name page dynamicaly

   ```tsx
   import Link from 'next/link';

   export default function Home() {
     return (
       <div>
         <h1>Dynamic Segment in NextJS 13</h1>
         <p>This example demostrate dynamic segments</p>
         <p>
           Other than listed bellow links you can visit any link dynamicaly by
           replacing [xyz] with any text in the following address
         </p>
         <ul>
           <li>https://hak-step04-dynamicsegments.vercel.app/[xyz]</li>
         </ul>
         <p>Dynamic Segments</p>
         <ol>
           <li>
             <Link href='/hassan'>Hassan&apos;s page</Link>
           </li>
           <li>
             <Link href='/umair'>Umairs&apos;s page</Link>
           </li>
           <li>
             <Link href='/zubair'>Zubair&apos;s page</Link>
           </li>
         </ol>
       </div>
     );
   }
   ```

5. Start the server with following command

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

- https://hak-step04-dynamicsegments.vercel.app

## Reading Material

- [Dynamic Segments](https://beta.nextjs.org/docs/routing/defining-routes#dynamic-segments)
- [Next.js](https://nextjs.org/)
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [API routes](https://nextjs.org/docs/api-routes/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [the Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
