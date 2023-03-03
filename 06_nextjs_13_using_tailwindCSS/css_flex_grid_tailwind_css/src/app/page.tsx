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
        <li>
          <Link href='chapter05'>Flex Direction</Link>
        </li>
        <li>
          <Link href='chapter06'>Flex Grow</Link>
        </li>
        <li>
          <Link href='chapter07'>Flex Shrink</Link>
        </li>
        <li>
          <Link href='chapter08'>Flex Basis</Link>
        </li>
        <li>
          <Link href='chapter09'>Flex Shorthand Property</Link>
        </li>
        <li>
          <Link href='chapter10'>Auto Margins</Link>
        </li>
        <li>
          <Link href='chapter11'>Order</Link>
        </li>
      </ul>
    </div>
  );
}
