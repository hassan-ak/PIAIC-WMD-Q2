export default function Page() {
  return (
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
  );
}
