export default function Home() {
  return (
    <div>
      <div className='mt-20 mb-10 bg-yellow-200'>
        <div>This is a first line</div>
        <button className='m-4 bg-yellow-700 p-4'>Button</button>
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
  );
}
