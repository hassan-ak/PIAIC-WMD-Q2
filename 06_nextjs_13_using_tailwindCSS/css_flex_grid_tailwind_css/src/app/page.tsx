import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='my-5 text-center text-5xl font-extrabold'>
        CSS Flex & Grid
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      <div className='flex flex-wrap justify-around'>
        {/* Flex Box */}
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>FlexBox</h1>
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
            <li>
              <Link href='chapter12'>Align Self</Link>
            </li>
            <li>
              <Link href='chapter13'>Align Content</Link>
            </li>
            <li>
              <Link href='chapter14'>Inline Flex</Link>
            </li>
          </ul>
        </div>
        {/* Flex Examples */}
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>Flex Examples</h1>
          <ul className='list-decimal px-10'>
            <li>
              <Link href='article'>Article Preview</Link>
            </li>
            <li>
              <Link href='report'>Fitness Report</Link>
            </li>
            <li>
              <Link href='tweet'>Single Tweet</Link>
            </li>
          </ul>
        </div>
        {/* Grid Box */}
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>Grid</h1>
          <ul className='list-decimal px-10'>
            <li>
              <Link href='chapter16'>Display Grid & Grid Template Columns</Link>
            </li>
            <li>
              <Link href='chapter17'>Grid Template Rows</Link>
            </li>
            <li>
              <Link href='chapter18'>Gap</Link>
            </li>
            <li>
              <Link href='chapter19'>Justify Content</Link>
            </li>
            <li>
              <Link href='chapter20'>Align Content</Link>
            </li>
            <li>
              <Link href='chapter21'>Justify Items</Link>
            </li>
            <li>
              <Link href='chapter22'>Align Items</Link>
            </li>
            <li>
              <Link href='chapter23'>Place Items</Link>
            </li>
            <li>
              <Link href='chapter24'>Grid Column Start, End & Span</Link>
            </li>
            <li>
              <Link href='chapter25'>Grid Row</Link>
            </li>
            <li>
              <Link href='chapter26'>Order</Link>
            </li>
            <li>
              <Link href='chapter27'>Advanced Grid Template Values</Link>
            </li>
            <li>
              <Link href='chapter28'>Grid Auto Flow</Link>
            </li>
            <li>
              <Link href='chapter29'>Justify Self & Align Self</Link>
            </li>
          </ul>
        </div>
        {/*  */}
        <div className='p-5'>
          <h1 className='text-3xl font-bold'>Grid Examples</h1>
          <ul className='list-decimal px-10'></ul>
        </div>
        {/*  */}
      </div>
    </div>
  );
}
