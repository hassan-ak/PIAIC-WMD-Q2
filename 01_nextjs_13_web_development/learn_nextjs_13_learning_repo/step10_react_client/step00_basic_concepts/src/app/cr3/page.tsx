import Image from 'next/image';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  const isLoggedIn = true;

  return <div>{isLoggedIn && <>Condition True</>}</div>;
}
