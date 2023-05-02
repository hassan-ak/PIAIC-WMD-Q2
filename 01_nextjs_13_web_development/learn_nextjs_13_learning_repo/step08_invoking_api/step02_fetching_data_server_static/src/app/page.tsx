async function getData() {
  const res = await fetch('https://api.quotable.io/random?tags=technology');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const quote = await getData();

  return <div>{quote.content}</div>;
}
