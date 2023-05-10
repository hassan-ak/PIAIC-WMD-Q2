function MyButton() {
  return (
    <button className='p-5 bg-slate-400 rounded-lg'>I&#39;m a button</button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
