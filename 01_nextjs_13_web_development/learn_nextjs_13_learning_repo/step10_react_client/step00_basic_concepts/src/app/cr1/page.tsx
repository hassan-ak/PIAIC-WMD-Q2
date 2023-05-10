import Image from 'next/image';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  const isLoggedIn = true;
  let content;
  if (isLoggedIn) {
    content = <>Condition True</>;
  } else {
    content = <>Condition Fasle</>;
  }
  return <div>{content}</div>;
}
