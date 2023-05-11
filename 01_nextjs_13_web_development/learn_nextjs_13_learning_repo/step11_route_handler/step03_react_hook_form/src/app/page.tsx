import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-lg font-semibold'>Forms</h1>
      <ul className='ml-5 text-blue-700'>
        <li>
          <Link href='form01'>Form Without Using a Library</Link>
        </li>
        <li>
          <Link href='form02'>Form using React Hook Form</Link>
        </li>
        <li>
          <Link href='form03'>
            Form using React Hook Form and validation 01
          </Link>
        </li>
        <li>
          <Link href='form04'>
            Form using React Hook Form and validation 02
          </Link>
        </li>
        <li>
          <Link href='form05'>
            Form using React Hook Form and Multiple validation
          </Link>
        </li>
        <li>
          <Link href='form06'>
            Form using React Hook Form and Reset Form values
          </Link>
        </li>
        <li>
          <Link href='form07'>
            Form using React Hook Form with default values
          </Link>
        </li>
        <li>
          <Link href='form08'>
            Form using React Hook Form with React select
          </Link>
        </li>
        <li>
          <Link href='form09'>
            Form using React Hook Form with other Input forms
          </Link>
        </li>
      </ul>
    </div>
  );
}
