import Image from 'next/image';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <Image
        className='rounded-full'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        height={user.imageSize}
        width={user.imageSize}
      />
    </>
  );
}
