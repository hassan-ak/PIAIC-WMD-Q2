# Routes in NextJs 13

## NextJS Routes

### Routing Fundamentals

- Terminology
  - Tree: hierarchical structure
  - Subtree: Part of a tree, starting at a new root and ending at the leaves
  - Root: The first node in a tree or subtree
  - Leaf: Nodes in a subtree that have no children such as the last segment in a URL path.
  - URL Path: Part of the URL that comes after the domain.
  - URL Segment: Part of the URL path delimited by slashes.
- The app Directory
  - Routes in App directory have new behaviour while the one in the pages serve the old behaviour
  - App directory components are server componnets but can be changed to client components
- Folders and Files inside app
  - Folders are used to define routes. A route is a single path of nested folders, following the hierarchy from the root folder down to a final leaf folder.
  - Files are used to create UI that is shown for the route segment
- Route Segments
  - Each folder in a route represents a route segment.
  - Each route segment is mapped to a corresponding segment in a URL path.
- Nested Routes
  - To create a nested route, you can nest folders inside each other. For example, you can add a new /dashboard/settings route by nesting two new folders in the app directory.
  - The /dashboard/settings route is composed of three segments:
    - / (Root segment)
    - dashboard (Segment)
    - settings (Leaf segment)
- Special Files
  - page.js: unique UI of a route, path publicly accessible.
  - layout.js: UI that is shared across multiple pages, accepts another layout or a page as its child, nest layouts to create nested routes.
  - loading.js: optional file to create loading UI for a specific part of an app, automatically wraps in React Suspense Boundary, showing loading component on the first load and while navigating between sibling routes.
  - error.js: optional file to isolate errors to specific parts of an app, show specific error information, and functionality to attempt to recover from the error, automatically wraps in a React Error Boundary. Showing your error component whenever an error in a subtree is caught.
  - template.js: optional file, similar to layouts, but on navigation, a new instance of the component is mounted and used where you require this behavior, such as enter/exit animations.
  - head.js: optional file used to define the contents of the head tag for a given route.
  - not-found.js: optional file used to render UI when the notFound function is thrown within a route segment.
- Colocation
  - any other files other than special files
- Server-Centric Routing with Client-side Navigation
  - app directory uses server-centric routing
  - the client does not have to download a route map
  - the router uses client-side navigation
  - when a user navigates to a new route, the browser will not reload the page.
  - Instead, the URL will be updated and Next.js will only render the segments that change.
  - while visiting multiple routes data will be cached and can be re-used
- Partial Rendering
  - Render only the segment that’s updating
- Advanced Routing Patterns
  - Parallel Routes
  - Intercepting Routes
  - Conditional Routes

### Defining Routes

- Creating Routes
  - routes are defined in app directory
  - each folder is a route and to create nested routes need to create nested folders
  - a folder with no page file is not publically accesible and to be used for storing files
- Creating UI
  - Special file conventions are used to create UI for each route segment. The most common are pages to show UI unique to a route, and layouts to show UI that is shared across multiple routes.

## Code routes in NextJS

1. Create a basic NextJS app for that you can follow step00.

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

2. For creating routes we need to define folders in app directory, so first create a file './name/page.tsx' which creates a name route and due to page.tsx file it becomes publicly accessible

   ```tsx
   export default function Name() {
     return (
       <div>
         <h1>Routes in NextJS 13</h1>
         <h3>Route</h3>
         <p>My name is Hassan Ali Khan</p>
       </div>
     );
   }
   ```

   This page is accesible at /name route, we can also create a nested root for that create a file './name/address/page.tsx'

   ```tsx
   export default function Address() {
     return (
       <div>
         <h1>Routes in NextJS 13</h1>
         <h3>Nested Route</h3>
         <p>I live in Lahore, Pakistan</p>
       </div>
     );
   }
   ```

   This page is accesible at /name/address route

3. Update './app/page.tsx

   ```tsx
   export default function Home() {
     return (
       <div>
         <h1>Routes in NextJS 13</h1>
         <p>This example has one route and a nested route</p>
         <ol>
           <li>route &emsp;&emsp;&emsp;&nbsp; : &emsp; /name</li>
           <li>nested-route&ensp; : &nbsp;&emsp;/name/address</li>
         </ol>
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

- https://hak-step01-routes.vercel.app

## Reading Material

- [Routing Fundamentals](https://beta.nextjs.org/docs/routing/fundamentals)
- [Server and Client Components](https://beta.nextjs.org/docs/rendering/server-and-client-components)
- [Introducing Next.js 13 and Turbopack](https://www.youtube.com/watch?v=NiknNI_0J48&ab_channel=Vercel)
- [The Future of the Web: From Cloud to Edge](https://www.youtube.com/watch?v=HlXLVb3QCvQ&ab_channel=Vercel)
- [The Future of the Web is on the Edge](https://deno.com/blog/the-future-of-web-is-on-the-edge)
- [React Server Components and The Edge!](https://www.youtube.com/watch?v=qBvVQz-_U94&ab_channel=ShokriDev)
- [The Future of the Web: From Cloud to Edge](https://www.youtube.com/watch?v=HlXLVb3QCvQ&ab_channel=Vercel)
- [React Server Components](https://www.plasmic.app/blog/how-react-server-components-work)
