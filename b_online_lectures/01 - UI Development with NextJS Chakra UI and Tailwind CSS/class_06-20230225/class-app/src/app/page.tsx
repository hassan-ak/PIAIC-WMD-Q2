const Wheel = () => {
  return (
    <div className='h-12 w-12 bg-black hover:scale-125 hover:cursor-pointer'></div>
  );
};

const HeadLight = () => {
  return (
    <div className='h-5 w-5 bg-red-500 hover:h-3 hover:w-3 hover:cursor-pointer'></div>
  );
};

const Seat = () => {
  return <div className='h-8 w-8 bg-amber-600'></div>;
};

export default function Home() {
  return (
    <div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className='my-5 text-center text-5xl font-extrabold'>
        Class06 - 2023/02/25
      </h1>
      <div className='my-5 h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className='bg-blue-900 text-[16px]'>Heading</h1>
      <p className='bg-blue-900 text-[16px]'>Paragraph</p>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <p>This is a default Paragraph</p>
      <p className='text-[12px]'>This is the one with 12px font size</p>
      <p className='text-[18px]'>This is the one with 18px font size</p>
      <p className='text-[24px]'>This is the one with 24px font size</p>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <p>This is a default Paragraph</p>
      <p className='text-xs'>This is the one with 12px font size</p>
      <p className='text-lg'>This is the one with 18px font size</p>
      <p className='text-2xl'>This is the one with 24px font size</p>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='h-[100px] w-[200px] bg-blue-900'></div>
      <div className='h-[50px] w-[50px] bg-black'></div>
      <div className='h-[50px] w-[50px] bg-black'></div>
      <div className='h-[50px] w-[50px] bg-black'></div>
      <div className='h-[50px] w-[50px] bg-black'></div>
      <div className='h-[20px] w-[20px] bg-red-500'></div>
      <div className='h-[20px] w-[20px] bg-red-500'></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='h-24 w-52 bg-blue-900'></div>
      <div className='h-12 w-12 bg-black'></div>
      <div className='h-12 w-12 bg-black'></div>
      <div className='h-12 w-12 bg-black'></div>
      <div className='h-12 w-12 bg-black'></div>
      <div className='h-5 w-5 bg-red-500'></div>
      <div className='h-5 w-5 bg-red-500'></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='h-24 w-52 bg-blue-900'></div>
      <Wheel />
      <Wheel />
      <Wheel />
      <Wheel />
      <HeadLight />
      <HeadLight />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <Seat />
      <div className='my-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}
