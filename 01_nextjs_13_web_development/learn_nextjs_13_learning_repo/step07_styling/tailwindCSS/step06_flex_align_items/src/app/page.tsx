export default function Home() {
  const VideoIcon = () => {
    return (
      <span className='mr-2 inline-block rounded bg-pink-600 p-3 text-white'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-7 w-7'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path d='M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z' />
        </svg>
      </span>
    );
  };
  return (
    <div className='flex  flex-wrap items-center justify-evenly text-gray-800'>
      <div className='m-12 flex items-stretch border border-solid border-black p-8'>
        <VideoIcon />
        <span className='border border-gray-400 px-3 text-lg'>Stretch</span>
      </div>
      <div className='m-12 flex items-center border border-solid border-black p-8'>
        <VideoIcon />
        <span className='border border-gray-400 px-3 text-lg'>Center</span>
      </div>
      <div className='m-12 flex items-start border border-solid border-black p-8'>
        <VideoIcon />
        <span className='border border-gray-400 px-3 text-lg'>Start</span>
      </div>
      <div className='m-12 flex items-end border border-solid border-black p-8'>
        <VideoIcon />
        <span className='border border-gray-400 px-3 text-lg'>End</span>
      </div>
      <div className='m-12 flex items-baseline border border-solid border-black p-8'>
        <span className='inline-block rounded bg-pink-600 p-3 text-4xl text-white'>
          V
        </span>
        <span className='border border-gray-400 px-3 text-lg'>Baseline</span>
      </div>
    </div>
  );
}
