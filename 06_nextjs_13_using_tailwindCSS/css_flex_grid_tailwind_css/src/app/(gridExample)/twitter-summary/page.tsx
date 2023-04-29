import Image from 'next/image';
import profileImage from '../../../../public/profile1.png';

export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-200 p-8 text-gray-700'>
      <div className='w-[32rem] rounded-xl bg-white p-6'>
        <div className='card-header flex items-center'>
          <Image
            src={
              'https://res.cloudinary.com/thirus/image/upload/v1635414289/images/avatar_jq0fmw.png'
            }
            className='mr-3 h-16 w-16 rounded-full  border-2
            border-white outline outline-1 outline-[#2563eb]'
            alt=''
            width={500}
            height={500}
          />
          <div>
            <h2 className='mb-0.5 text-2xl font-bold'>John Doe</h2>
            <span className='text-gray-500'>@johndoe</span>
          </div>
          <div className='ml-auto text-right text-sm text-gray-500'>
            <div className='mr-4 flex flex-row-reverse'>
              <Image
                src={
                  'https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=75'
                }
                className='-mr-4 inline-block h-10 w-10 rounded-full border border-white'
                alt=''
                width={500}
                height={500}
              />
              <Image
                src={
                  'https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&h=75'
                }
                className='-mr-4 inline-block h-10 w-10 rounded-full border border-white'
                alt=''
                width={500}
                height={500}
              />
              <Image
                src={
                  'https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&h=75'
                }
                className='-mr-4 inline-block h-10 w-10 rounded-full border border-white'
                alt=''
                width={500}
                height={500}
              />
              <Image
                src={
                  'https://images.pexels.com/photos/7397453/pexels-photo-7397453.jpeg?auto=compress&cs=tinysrgb&h=75'
                }
                className='-mr-4 inline-block h-10 w-10 rounded-full border border-white'
                alt=''
                width={500}
                height={500}
              />
              <Image
                src={
                  'https://images.pexels.com/photos/9244512/pexels-photo-9244512.jpeg?auto=compress&cs=tinysrgb&h=75'
                }
                className='-mr-4 inline-block h-10 w-10 rounded-full border border-white'
                alt=''
                width={500}
                height={500}
              />
            </div>
            <span>19K Followers</span>
          </div>
        </div>
        <div className='mt-6 text-sm text-gray-600'>
          Follow for Web Development & Productivity Tips & Resources.{' '}
          <strong>Laravel | Vue | Tailwind CSS | UI/UX</strong>
        </div>
        <div className='mt-6 grid grid-cols-2 gap-6'>
          <div>
            <span className='text-sm text-gray-500'>Tweets</span>
            <span className='block text-xl font-bold'>293</span>
          </div>
          <div>
            <span className='text-sm text-gray-500'>Tweet Impressions</span>
            <span className='block text-xl font-bold'>182K</span>
          </div>
          <div>
            <span className='text-sm text-gray-500'>Profile Visits</span>
            <span className='block text-xl font-bold'>9242</span>
          </div>
          <div>
            <span className='text-sm text-gray-500'>Mentions</span>
            <span className='block text-xl font-bold'>299</span>
          </div>
        </div>
      </div>
    </div>
  );
}
