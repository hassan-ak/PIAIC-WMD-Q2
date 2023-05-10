'use client';
export default function Com() {
  function handleClick() {
    console.log('You clicked me!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
