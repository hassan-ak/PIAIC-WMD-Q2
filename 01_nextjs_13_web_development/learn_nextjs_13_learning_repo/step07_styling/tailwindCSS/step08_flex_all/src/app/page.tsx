import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='my-5 text-center text-5xl font-extrabold'>
        Step08 flex_all
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      <div className='flex flex-wrap justify-around'>
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>Flex</h1>
          <ul className='list-decimal px-10'>
            <li>
              <Link href='flexgrow'>Flex Grow</Link>
            </li>
            <li>
              <Link href='flexshrink'>Flex Shrink</Link>
            </li>
            <li>
              <Link href='flexbasis'>Flex Basis</Link>
            </li>
            <li>
              <Link href='flexshort'>Flex Shorthand Property</Link>
            </li>
            <li>
              <Link href='marginauto'>Auto Margins</Link>
            </li>
            <li>
              <Link href='order'>Order</Link>
            </li>
            <li>
              <Link href='alignself'>Align Self</Link>
            </li>
            <li>
              <Link href='aligncontent'>Align Content</Link>
            </li>
            <li>
              <Link href='inlineflex'>Inline Flex</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
