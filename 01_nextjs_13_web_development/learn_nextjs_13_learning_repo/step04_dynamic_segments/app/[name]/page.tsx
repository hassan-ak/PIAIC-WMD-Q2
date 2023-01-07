export default function Name({ params }: { params: { name: string } }) {
  return (
    <div>
      <h1>Dynamic Segment in NextJS 13</h1>
      <div>My name is {params.name}.</div>
    </div>
  );
}
