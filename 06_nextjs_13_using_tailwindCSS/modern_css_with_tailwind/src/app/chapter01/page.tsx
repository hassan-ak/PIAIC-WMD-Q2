import pLogo from '@/../public/pLogo.png';
import Image from 'next/image';

export default function Chapter01() {
  return (
    <div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className='my-5 text-center text-5xl font-extrabold'>Chapter 01</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
      <h1>Welcome to NorthBy</h1>
      <div className='mb-5 h-1 bg-black'></div>
      <div className='flex'>
        <div>
          <Image src={pLogo} alt='Panaverse Logo' width={80}></Image>
        </div>
        <div>
          <h1>Welcome to NorthBy</h1>
          <h2>A premium in sight and sound</h2>
          <button>Learn More</button>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='mb-5 h-1 bg-black'></div>
      <div className='flex justify-center'>
        <div className='order-last mx-4'>
          <Image src={pLogo} alt='Panaverse Logo' width={80}></Image>
        </div>
        <div className='mx-4 self-center'>
          <h1>Welcome to NorthBy</h1>
          <h2>A premium in sight and sound</h2>
          <button>Learn More</button>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='mb-5 h-1 bg-black'></div>
      <div className='flex justify-center bg-gray-300'>
        <div className='order-last mx-4'>
          <Image src={pLogo} alt='Panaverse Logo' width={80}></Image>
        </div>
        <div className='mx-4 self-center text-center'>
          <h1 className='text-6xl font-bold text-blue-700'>
            Welcome to NorthBy
          </h1>
          <h2 className='text-3xl font-semibold text-blue-300'>
            A premium in sight and sound
          </h2>
          <button>Learn More</button>
        </div>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className='mb-5 h-1 bg-black'></div>
      <div className='flex justify-center bg-gray-300'>
        <div className='order-last mx-4 self-center'>
          <Image
            src={pLogo}
            alt='Panaverse Logo'
            width={80}
            className='rounded-full bg-blue-500'
          ></Image>
        </div>
        <div className='mx-4 self-center text-center'>
          <h1 className='text-6xl font-bold text-blue-700'>
            Welcome to NorthBy
          </h1>
          <h2 className='text-3xl font-semibold text-blue-300'>
            A premium in sight and sound
          </h2>
          <button className='my-4 rounded-lg border-2 border-black bg-blue-900 px-4 py-2 text-white '>
            Learn More
          </button>
        </div>
      </div>
      <div className='mb-5 h-1 bg-black'></div>
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  );
}
