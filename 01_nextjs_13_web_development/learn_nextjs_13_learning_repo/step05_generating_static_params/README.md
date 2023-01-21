# Generating Static Params in NextJs 13

### Generating Static Params

- The generateStaticParams server function can be used in combination with dynamic route segments to define the list of route segment parameters that will be statically generated at build time instead of on-demand.
- This replaces getStaticPaths of Next.js 12 with a simplified API. generateStaticParams doesn't require any context parameters. It runs at build time before the corresponding Layouts or Pages are generated. It will not be called again during revalidation (ISR).
- The primary benefit of the generateStaticParams function in it's smart retrieval of data. If content is fetched within the generateStaticParams function using a fetch request, the requests are automatically deduped. This means a fetch request with the same arguments across multiple generateStaticParams, Layouts, and Pages will only be made once, which decreases build times.

### Generate Static Params

- generateStaticParams()
  - The generateStaticParams function runs at build time before the corresponding Layouts or Pages are generated. It will not be called again during revalidation (ISR).
  - The value returned by generateStaticParams is used to generate a list of static segments. Each segment receives the value of the returned object as their params prop.
- Multiple Dynamic Segments in a Route
  - Generate segments from the bottom up
  - Generate segments from the top down
- Catch-all and Optional Catch-all Dynamic Segments

## Code Route Groups in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. We are defining dynamic segment so create a folder [name] and rest of the code in this folder, personal folder will have no effect on the URL.
3. Create '.[name]/page.tsx' to define a dynamic segment and also dynamic staic params

   ```tsx
   export async function generateStaticParams() {
     const names: string[] = ['hassan', 'zubair', 'umair'];
     return names.map((name) => ({
       name: name,
     }));
   }
   export default function GiveName({ params }: { params: { name: string } }) {
     return <div>My name is {params.name}.</div>;
   }
   ```

4. Update './app/page.tsx and add Link element to access name page dynamicaly

   ```tsx
   import Link from 'next/link';
   export default function Home() {
     return (
       <div>
         <h1>Generating Static Params in NextJS 13</h1>
         <p>This example demostrate Generating Static Params</p>
         <p>
           Other than listed bellow links you can visit any link dynamicaly by
           replacing [xyz] with any text in the following address
         </p>
         <ul>
           <li>https://hak-step05-generatingstaticparams.vercel.app/[xyz]</li>
         </ul>
         <p>Generated Static Params</p>
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
         <p>Dynamic Segments</p>
         <ol>
           <li>
             <Link href='/umar'>Umar&apos;s page</Link>
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

- https://hak-step05-generatingstaticparams.vercel.app

## Reading Material

- [Dynamic Segments](https://beta.nextjs.org/docs/routing/defining-routes#dynamic-segments)
