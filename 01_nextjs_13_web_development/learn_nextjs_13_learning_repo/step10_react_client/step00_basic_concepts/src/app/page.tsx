import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <h1 className='text-lg font-semibold'>Basic Concepts</h1>
      <ul className='ml-5 text-blue-700'>
        <li>
          <Link href='cnc'>Creating and nesting components</Link>
        </li>
        <li>
          <Link href='wmj'>Writing markup with JSX</Link>
        </li>
        <li>
          <Link href='dd'>Displaying data</Link>
        </li>
        <li>
          <Link href='cr1'>Conditional rendering 01</Link>
        </li>
        <li>
          <Link href='cr2'>Conditional rendering 02</Link>
        </li>
        <li>
          <Link href='cr3'>Conditional rendering 03</Link>
        </li>
        <li>
          <Link href='rl'>Rendering lists</Link>
        </li>
        <li>
          <Link href='re'>Responding to events</Link>
        </li>
        <li>
          <Link href='us'>Updating the screen</Link>
        </li>
        <li>
          <Link href='sdc'>Sharing data between components</Link>
        </li>
        <li>
          <Link href='ttt'>Tic-Tac-Toe</Link>
        </li>
      </ul>
    </div>
  );
}
