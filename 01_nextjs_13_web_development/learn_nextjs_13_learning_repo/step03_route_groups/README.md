# Rout Groups in NextJs 13

## Route Groups

### Route Groups Documentation

- hierarchy of the app folder maps directly to URL paths
- it’s possible to break out of this pattern by creating a route group.
- Route groups can be used to
  - Organize routes without affecting the URL structure.
  - Opting-in specific route segments into a layout.
  - Create multiple root layouts by splitting your application.
- Convention
  - A route group can be created by wrapping a folder’s name in parenthesis
- Organize routes without affecting the URL path
  - folders in parenthesis will be omitted from the URL
  - you can create a different layout for each group by adding a layout.js file inside their folders.
- Opting specific segments into a layout
- Creating multiple root layouts
  - To create multiple root layouts, remove the top-level layout.js file, and add a layout.js file inside each route groups.
  - This is useful for partitioning an application into sections that have a completely different UI or experience.
  - The html and body tags need to be added to each root layout.

### Loading UI

- Next.js 13 introduced a new file convention, loading.js, to help you create meaningful Loading UI with React Suspense.
- With this convention, you can show an instant loading state from the server while the content of a route segment loads, the new content is automatically swapped in once rendering is complete.
- Instant Loading States
  - An instant loading state is fallback UI that is shown immediately upon navigation.
- Manually Defining Suspense Boundaries

## Code Route Groups in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. We are defining route groups so create a folder (personal) and rest of the code in this folder, personal folder will have no effect on the URL. Rest of the app is same as defined in steo02
3. Create '.(personal)/name/page.tsx' to define a route and acces a nested root using useRoter hook, this is a client side component

   ```tsx
   'use client';
   import { useRouter } from 'next/navigation';
   export default function Name() {
     const router = useRouter();
     return (
       <div>
         <h1>Route Groups in NextJS 13</h1>
         <h5>personal Route Group</h5>
         <p>My name is Hassan Ali Khan</p>
         <br />
         <button type='button' onClick={() => router.push('/name/address')}>
           Get Address
         </button>
       </div>
     );
   }
   ```

   create a nested root by creating a file '.(personal)/name/address/page.tsx' which is a server component

   ```tsx
   export default function Address() {
     return (
       <div>
         <h1>Route Groups in NextJS 13</h1>
         <h3>personal nested-Route Group</h3>
         <p>I live in Lahore, Pakistan</p>
       </div>
     );
   }
   ```

4. Update './app/page.tsx and add Link element to access name page

   ```tsx
   import Link from 'next/link';
   export default function Home() {
     return (
       <div>
         <div>
           <h1>Route Groups in NextJS 13</h1>
           <p>
             This example has one route and a nested route along with personal
             reoute group
           </p>
           <ol>
             <li>
               route (Link element) &emsp;&emsp;&emsp;&emsp;&nbsp; : &emsp;{' '}
               <Link href='/name'>name page</Link>
             </li>
             <li>
               nested-route (useRouter hook)&ensp; : &nbsp;&emsp;access from
               name page
             </li>
           </ol>
         </div>
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

- https://hak-step03-routegroups.vercel.app

## Reading Material

- [Route Groups](https://beta.nextjs.org/docs/routing/defining-routes#route-groups)
- [Next.js](https://nextjs.org/)
- [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [API routes](https://nextjs.org/docs/api-routes/introduction)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [the Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
