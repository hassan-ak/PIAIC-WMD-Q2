import Image from 'next/image';
import panaversePic from '../../../public/appLogo.png';

export default function Page() {
  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='order-last mx-4 self-center'>
        <Image src={panaversePic} width={80} height={80} alt='music' />
      </div>
      <div className='mx-4 self-center text-center'>
        <h1 className='text-6xl font-bold text-blue-700'>
          Welcome to Panaverse
        </h1>
        <h2 className='text-3xl font-semibold text-blue-300'>
          A Community of Web 3 and Metaverse Developers
        </h2>
        <button
          className='my-4 rounded-lg border-2 border-black bg-blue-900 px-4
py-2 text-white'
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
