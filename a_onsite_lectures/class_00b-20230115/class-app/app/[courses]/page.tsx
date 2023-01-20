export default function GiveCourse({ params }: { params: { courses: string } }) {
  return <div>{params.courses}</div>;
}
