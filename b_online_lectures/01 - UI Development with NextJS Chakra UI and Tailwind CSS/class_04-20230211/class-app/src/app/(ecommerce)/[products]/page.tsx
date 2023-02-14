export default function Home({ params }: { params: { product: string } }) {
  return (
    <>
      <h1>Next13 JS</h1>
      <br />
      <p>Products</p>
      <ul>
        <li>{params.product}</li>
      </ul>
    </>
  );
}
