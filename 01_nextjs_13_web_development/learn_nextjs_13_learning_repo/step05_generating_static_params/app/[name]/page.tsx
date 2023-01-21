export async function generateStaticParams() {
  const names: string[] = ['hassan', 'zubair', 'umair'];
  return names.map((name) => ({
    name: name,
  }));
}

export default function GiveName({ params }: { params: { name: string } }) {
  return <div>My name is {params.name}.</div>;
}
