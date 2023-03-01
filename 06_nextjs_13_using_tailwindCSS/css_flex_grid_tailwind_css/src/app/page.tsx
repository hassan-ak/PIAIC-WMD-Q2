import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='my-5 text-center text-5xl font-extrabold'>
        CSS Flex & Grid
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      <ul className='list-decimal px-10'>
        <li>
          <Link href='chapter01'>Display Flex</Link>
        </li>
        <li>
          <Link href='chapter02'>Justify Content</Link>
        </li>
        <li>
          <Link href='chapter03'>Flex Wrap</Link>
        </li>
        <li>
          <Link href='chapter04'>Align Items</Link>
        </li>
      </ul>
    </div>
  );
}
