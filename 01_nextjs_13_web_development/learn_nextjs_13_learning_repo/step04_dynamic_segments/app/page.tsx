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
