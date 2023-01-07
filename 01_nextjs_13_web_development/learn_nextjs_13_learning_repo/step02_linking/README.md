# Linking in NextJs 13

## NextJS Linking and Navigating

### Linking and Navigating

- The Next.js router uses server-centric routing with client-side navigation.
- It supports instant loading states and concurrent rendering.
- This means navigation maintains client-side state, avoids expensive re-renders, is interruptible, and doesn't cause race conditions.
- There are two ways to navigate between routes:
  - Link Component
  - useRouter Hook
- Link Component
  - Extends HTML a element, provides pre-fetching and client side navigation
  - we can use for dynamic routes
- useRouter() Hook
  - The useRouter hook allows you to programmatically change routes inside Client Components.
- How Navigation Works
  - A route transition is initiated using Link or calling router.push().
  - The router updates the URL in the browser’s address bar.
  - The router avoids unnecessary work by re-using segments that haven't changed (e.g. shared layouts) from the client-side cache. This is also referred to as partial rendering.
  - If the conditions of soft navigation are met, the router fetches the new segment from the cache rather than the server. If not, the router performs a hard navigation and fetches the Server Component payload from the server.
  - If created, loading UI is shown from the server while the payload is being fetched.
  - The router uses the cached or fresh payload to render the new segments on the client.
- Client-side Caching of Rendered Server Components
  - router stores the rendered result of Server Components in cache
  - while navigating router stores previously and pre-fetched segments
  - It helps to reuse cached data
- Invalidating the Cache
  - The cache can be invalidated using router.refresh().
- Prefetching
  - Links automaticaly prefetch segments
  - useRouter hook uses prefetch method
- Static and Dynamic Routes:
  - If the route is static, all the Server Component payloads for the route segments will be prefetched.
  - If the route is dynamic, the payload from the first shared layout down until the first loading.js file is prefetched. This reduces the cost of prefetching the whole route dynamically and allows instant loading states for dynamic routes.
- Hard Navigation
- Soft Navigation
- Conditions for Soft Navigation
  - On navigation, Next.js will use soft navigation if the route you are navigating to has been prefetched, and either doesn't include dynamic segments or has the same dynamic parameters as the current route.
- Back/Forward Navigation
  - uses soft naviagtion
- Focus and Scroll Management

### Pages and Layouts

- Pages
  - A page is UI that is unique to a route. You can define pages by exporting a component from a page.js file. Use nested folders to define a route and a page.js file to make the route publicly accessible.
- Layouts
  - A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.
- Root Layout
  - The root layout is defined at the top level of the app directory and applies to all routes. This layout enables you to modify the initial HTML returned from the server.
- Nesting Layouts
  - Layouts defined inside a folder apply to specific route segments and render when those segments are active. By default, layouts in the file hierarchy are nested, which means they wrap child layouts via their children prop.
- Templates
  - similar to layouts
  - templates create a new instance for each of their children on navigation
- Modifying head
  - In the app directory, you can modify the head HTML elements such as title and meta using a new special head.js file

## Code Linking in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. Crate './name/page.tsx' to define a route and acces a nested root using useRoter hook, this is a client side component

   ```tsx
   'use client';
   import { useRouter } from 'next/navigation';
   export default function Name() {
     const router = useRouter();
     return (
       <div>
         <h1>Linking in NextJS 13</h1>
         <h3>Route - Link Element - Client Component</h3>
         <p>My name is Hassan Ali Khan</p>
         <br />
         <button type='button' onClick={() => router.push('/name/address')}>
           Get Address
         </button>
       </div>
     );
   }
   ```

   create a nested root by creating a file './name/address/page.tsx' which is a server component

   ```tsx
   export default function Address() {
     return (
       <div>
         <h1>Linking in NextJS 13</h1>
         <h3>Nested Route - useRouter Hook - Server Component</h3>
         <p>I live in Lahore, Pakistan</p>
       </div>
     );
   }
   ```

3. Update './app/page.tsx and add Link element to access name page

   ```tsx
   import Link from 'next/link';
   export default function Home() {
     return (
       <div>
         <div>
           <h1>Linking in NextJS 13</h1>
           <p>This example has one route and a nested route</p>
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

4. Start the server with following command

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

- https://hak-step02-linking.vercel.app

## Reading Material

- [Linking and Navigating](https://beta.nextjs.org/docs/routing/linking-and-navigating)
- [Link](https://beta.nextjs.org/docs/api-reference/components/link)
- [useRouter() Hook](https://beta.nextjs.org/docs/api-reference/use-router)
- [Client Component](https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components)
