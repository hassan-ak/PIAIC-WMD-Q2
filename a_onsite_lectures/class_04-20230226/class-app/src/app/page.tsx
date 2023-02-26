import Image from 'next/image';
import panaversePic from '../../public/appLogo.png';

export default function Home() {
  return (
    <div>
      {/*  */}
      <div>
        <h1 className='text-3xl font-bold underline'>
          Hello, Next.js from Hassan Ali Khan!
        </h1>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div className='flex'>
        <div>
          <Image src={panaversePic} width={80} height={80} alt='music' />
        </div>
        <div>
          <h1>Welcome to Panaverse</h1>
          <h2>A Community of Web 3 and Metaverse Developers</h2>
          <button>Learn More</button>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
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
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
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
          <button className='rounded-lgtext-white my-4 border-2 border-black bg-blue-900 px-4 py-2'>
            Learn More
          </button>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div>
        <div className='mt-20 mb-10 bg-red-500'>
          <div>This is a first line</div>
          <button className='m-4 bg-yellow-500 p-4'>Button</button>
          <div>This is a last line</div>
        </div>
        <div>
          <div>Margins, Paddings, and Borders</div>
          <div className='mt-20 mb-10'>
            <button className='border border-black p-10'>One</button>
            <button className='m-10 border border-black'>Two</button>
            <button className='m-2 border-4 border-black p-2'>Three</button>
          </div>
          <div>
            <button className='m-4 rounded-md border-2 border-black p-4'>
              Four
            </button>
            <button className='m-4 rounded-2xl border-2 border-black p-4'>
              Five
            </button>
            <button className='m-4 rounded-full border-2 border-black p-4'>
              Six
            </button>
          </div>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div className='bg-gray-50 p-10'>
        <div className='mb-10'>
          <button className='mx-10 bg-white p-10 shadow-sm'>One</button>
          <button className='mx-10 bg-white p-10 shadow-sm'>Two</button>
          <button className='mx-10 bg-white p-10 shadow-lg'>Three</button>
        </div>
        <div>
          <button className='mx-10 bg-white p-10 shadow-xl'>Four</button>
          <button className='mx-10 bg-white p-10 shadow-2xl'>Five</button>
          <button className='mx-10 bg-white p-10 shadow-inner'>Six</button>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div>
        <div className='mb-10 w-1/2 bg-gradient-to-r from-gray-50 to-black p-10'>
          <button className='mx-10 bg-white p-10'>One</button>
          <button className='mx-10 bg-white p-10'>Two</button>
        </div>
        <div
          className='mb-10 w-1/2 bg-gradient-to-r
        from-gray-50 via-black to-gray-50 p-10'
        >
          <button className='mx-10 bg-white p-10'>Three</button>
          <button className='mx-10 bg-white p-10'>Four</button>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div>
        <button className='m-4 rounded-md p-4 ring'>Four</button>
        <button className='m-4 rounded-2xl p-4 ring-2'>Five</button>
        <button className='m-4 rounded-full p-4 ring-4 ring-offset-4 ring-offset-black'>
          Six
        </button>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div className='flex'>
        <div className='quote'>
          <p>
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span>- David J. Schwartz</span>
        </div>
        <div className='quote'>
          <p>“Give out what you most want to come back.”</p>
          <span>- Robin Sharma</span>
        </div>
        <div className='quote'>
          <p>
            “You don't have to be great at something to start, but you have to
            start to be great at something.”
          </p>
          <span>- Zig Ziglar</span>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div className='wrapper'>
        <div className='menu flex justify-between'>
          <a href='#' className='active'>
            Profile
          </a>
          <a href='#'>Notifications</a>
          <a href='#'>Payments</a>
          <a href='#'>Settings</a>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
      <div className='card'>
        <h1>CSS Flex & Grid</h1>
        <p>
          This book takes a completely different approach. I won't teach you the
          things flex and grid can do. Instead, I will first show you some
          components and layouts and make you think how to build them using the
          CSS concepts you already know. Now you have a problem, and you want a
          solution.
        </p>
        <div className='links flex justify-between'>
          <a href='#'> Prev </a>
          <a href='#'> Next </a>
        </div>
      </div>
      <div className='my-10 h-2 bg-black'></div>
      {/*  */}
    </div>
  );
}
