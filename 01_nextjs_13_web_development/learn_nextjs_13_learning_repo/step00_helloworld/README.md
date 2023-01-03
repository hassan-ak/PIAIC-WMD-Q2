# Getting Started with NextJs 13

## NextJS 13

- With app directory in NextJs we can use React server components and React 18 features
  - [React 18 Features](https://reactjs.org/blog/2022/03/29/react-v18.html)
  - [App Directory Roadmap](https://beta.nextjs.org/docs/app-directory-roadmap)
- Initially react uses client side componernts due to which all code use to be rendered on client side
- Now with React 18 components can be rendered on client side as well as on server side
  - non-interactive components can be rendered on the server as Server Components
  - components in the app directory are by default server components to make them client components we need to add directive

## Pre-requisites

- NodeJS 16.8 or later
- VS code
- MacOS, Windows (including WSL), or Linux

## Setup a basic NextJS Project

1. To create a new NextJs app with app directory run the following command

   ```cmd
   npx create-next-app@latest --experimental-app
   ```

   as app directory is currently an experimental feature we need to use the flag while creating the app, during app creation answer prompts as follows

   ```cmd
   √ What is your project named? » step00_helloworld (projectName)
   √ Would you like to use TypeScript with this project? » Yes
   √ Would you like to use ESLint with this project? » Yes
   ```

   NextJS by-default supports typescript while es-lint is used to find and fix problems in JS code. So installing both at the start is recomended. After successful installation all required dependancies will be installed and basic app structured will be astablished

2. Before moving forward lets have a look at the app structure

   - .git, folder to be used by git for tracking
   - app, define routes, create UI and colocate files such as components, tests, or stylesheets.
     - head.tsx, defines the head of the app, consider it as the head tag in the HTML page
     - layout.tsx, defnes the body of the app same as head it is like body tag in html. It is used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.
     - page.tsx, the component we are going to code, above three files will be rendered when we access the app. It is used to define the unique UI of a route. Pages represent the leaf of the route and are needed for the path to be accessible.
     - globals.css and page.module.css are css files and can be deleted based on usage requirement
   - node_modules, folder to do installations for the libraries to be used
   - pages, multiple files(page) and each page is associated with a route based on its file name.
     - ./api/hello.ts, a page whihc acts as a rest api
   - public, static files such as images are placed in a public folder of a nextjs root application, these files are rendered at build time
   - .eslintrc.json, configration for eslint library
   - .gitignore, list files and folders not to be tracked by the git
   - next.config.js, stores next configraton settings
   - next-env.d.ts, This file ensures Next.js types are picked up by the TypeScript compiler. You cannot remove it, however, you can edit it
   - package-lock.json, It contains basic information about the project. It describes the exact tree that was generated to allow subsequent installs to have the identical tree
   - package.json, It records important metadata about a project
   - Readme.md, a markdown file
   - tsconfig.json, typescript configrations
   - .vscode, Workspace settings as well as debugging and task configurations are stored at the root
   - .next, build folder auto created when we build the app
   - .vercel, created when you link a directory to a Vercel project and contains vercel credentials

3. Update ./app/page.tsx with the following content to display a hello world message

   ```tsx
   export default function Home() {
     return (
       <div>
         <p>Hello World</p>
       </div>
     );
   }
   ```

   comment out styles import in layout.tsx, while you can also remove css files initially created.

4. Start the server with following command

   ```cmd
   npm run dev
   ```

   this will build the app and continue running untill stoped, this command will also run the app on the local host. You can access it on the browser at the follwoing link

   ```cmd
   http://localhost:3000/
   ```

## Steps to deploy on vercel using CLI

1. Install vercel cli

   ```cmd
   npm i -g vercel
   ```

2. Signup on vercel

3. Deploy using following command

   ```cmd
   vercel
   ```

   when deploying for the very first time it will ask to login and list multiple options you can use any one of it

   ```cmd
   Vercel CLI 28.10.1
   > > No existing credentials found. Please log in:
   > Log in to vercel (use arrows keys)
   Continue with GitHub
   Continue with GitLab
   Continue with Bitbucket
   Continue with Email
   Continue with SAML Single Sign-on
   ---------------------------------
   Cancel
   ```

   after success full signin it will ask for authentication through web, as I selected gitlab

   ```cmd
   > Log in to Vercel gitlab
   > Success! GitLab authentiaction complete for ***@***.com
   ```

   now it will ask for multiple optiosn to select for delymnet

   ```cmd
   ? Set up and deploy “~\step00_helloworld”? [Y/n] y
   ? Which scope do you want to deploy to? (Select Scope)
   ? Link to existing project? [y/N] n
   ? What’s your project’s name? hak-step00-helloworld (projectName)
   ? In which directory is your code located? ./ (enter path if multiple projects)
   Local settings detected in vercel.json:
   Auto-detected Project Settings (Next.js):
    - Build Command: next build
    - Development Command: next dev --port $PORT
    - Install Command: `yarn install`, `pnpm install`, or `npm install`
    - Output Directory: Next.js default
   ? Want to modify these settings? [y/N] n
   ```

   after successful deployment target URL will be displayed

   ```cmd
   ✅  Production: https://hak-step00-helloworld.vercel.app [35s]
   ```

## Steps to deploy on vercel using Web

1. Sigin to Vercel website
2. From add new option select project
3. Select Import Git Repository and import desired repo from the list
4. You will be asked to install vercel on github repositories
5. Configure project

   - select project name
   - select root directory
   - framework will be auto-detected

6. Select deploy
7. You can change domain name from domains list

## Deployed URL

- https://hak-step00-helloworld.vercel.app

## Reading Material

- [Node.js](https://nodejs.org/en/download/)
- [VS Code](https://code.visualstudio.com/download)
- [Next.js 13 Installation Docs](https://beta.nextjs.org/docs/installation)
- [React Component](https://beta.reactjs.org/learn#components)
- [Write Markup with JSX](https://beta.reactjs.org/learn#writing-markup-with-jsx)
- [API routes](https://nextjs.org/docs/api-routes/introduction)
- [next/font](https://nextjs.org/docs/basic-features/font-optimization)
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js tutorial](https://nextjs.org/learn)
- [Next.js GitHub repository](https://github.com/vercel/next.js/)
- [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
- [Next.js deployment documentation](https://nextjs.org/docs/deployment)
- [Vercel CLI](https://vercel.com/docs/cli)
- [Project config with vercel.json](https://vercel.com/docs/project-configuration)
- [vercel.json examples](https://github.com/grand-stack/grand-stack-starter/blob/master/vercel.json)
- [Re-writing vercel.json](https://stackoverflow.com/questions/73607646/problems-mounting-a-vercel-nextjs-project-as-a-subdirectory-of-a-different-verce)
