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
            nested-route (useRouter hook)&ensp; : &nbsp;&emsp;access from name
            page
          </li>
        </ol>
      </div>
    </div>
  );
}
