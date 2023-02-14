import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Next13 JS</h1>
      <br />
      <p>Pages</p>
      <ul>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </>
  );
}
