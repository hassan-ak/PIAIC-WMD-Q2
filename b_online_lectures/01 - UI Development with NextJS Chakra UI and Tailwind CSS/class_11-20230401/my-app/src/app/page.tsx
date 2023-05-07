import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h1 className='text-lg font-medium'>Data Fetching</h1>
      <ul className='ml-5 text-blue-700'>
        <li>
          <Link href='static'>Static</Link>
        </li>
        <li>
          <Link href='server'>Server</Link>
        </li>
        <li>
          <Link href='client'>Client</Link>
        </li>
        <li>
          <Link href='sequential'>Sequential</Link>
        </li>
        <li>
          <Link href='parallel'>Parallel</Link>
        </li>
      </ul>
    </div>
  );
}
