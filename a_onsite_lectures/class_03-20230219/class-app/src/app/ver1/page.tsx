import Image from 'next/image';
import panaversePic from '../../../public/appLogo.png';

export default function Page() {
  return (
    <div className='flex justify-center bg-gray-300'>
      <div className='order-last mx-4'>
        <Image src={panaversePic} width={80} height={80} alt='music' />
      </div>
      <div className='mx-4 self-center'>
        <h1>Welcome to Panaverse</h1>
        <h2>A Community of Web 3 and Metaverse Developers</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}
