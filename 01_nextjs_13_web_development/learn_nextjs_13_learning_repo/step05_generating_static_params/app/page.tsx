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
