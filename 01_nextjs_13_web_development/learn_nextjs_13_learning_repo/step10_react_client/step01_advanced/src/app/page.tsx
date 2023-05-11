import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-lg font-semibold'>React Client Details</h1>
      <ul className='ml-5 text-blue-700'>
        <li>
          <Link href='thinkingInReact'>Thinking in React</Link>
        </li>
        <li>
          <Link href='describingTheUi'>Describing The UI</Link>
        </li>
        <li>
          <Link href='stateAsSnapshot'>State as a Snapshot</Link>
        </li>
        <li>
          <Link href='suspense'>Suspense</Link>
        </li>
        <li>
          <Link href='managingState'>Managing State</Link>
        </li>
      </ul>
    </div>
  );
}
