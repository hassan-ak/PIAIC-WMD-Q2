import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='my-5 text-center text-5xl font-extrabold'>
        Modern CSS with Tailwind
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      <ul className='list-decimal px-10'>
        <li>
          <Link href='chapter01'>Chapter 01</Link>
        </li>
        <li>
          <Link href='chapter02'>Chapter 02</Link>
        </li>
        <li>
          <Link href='chapter03'>Chapter 03</Link>
        </li>
        <li>
          <Link href='chapter04'>Chapter 04</Link>
        </li>
      </ul>
    </div>
  );
}
