export default function Page() {
  return (
    <div>
      <div className='mb-10 w-1/2 bg-gradient-to-r from-gray-50 to-black p-10'>
        <button className='mx-10 bg-white p-10'>One</button>
        <button className='mx-10 bg-white p-10'>Two</button>
      </div>
      <div
        className='mb-10 w-1/2 bg-gradient-to-r
          from-gray-50 via-red-400 to-gray-50 p-10'
      >
        <button className='mx-10 bg-white p-10'>Three</button>
        <button className='mx-10 bg-white p-10'>Four</button>
      </div>
    </div>
  );
}
