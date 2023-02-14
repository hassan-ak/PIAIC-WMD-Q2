import Link from 'next/link';
import cnc from '../../../../public/cnc.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <h1>About Page</h1>
      <br />
      <p>Pages</p>
      <ul>
        <li>
          <Link href='.'>Home</Link>
        </li>
      </ul>
      <Image src={cnc} alt='cnc' width={400} height={200} />
    </>
  );
}
