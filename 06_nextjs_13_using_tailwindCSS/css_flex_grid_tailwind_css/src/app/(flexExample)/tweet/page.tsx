import Image from 'next/image';
import profileImage from '../../../../public/profile1.png';

export default function Home() {
  return (
    // Main page
    <div className='flex min-h-screen items-center justify-center bg-gradient-to-br from-[#FFEAF6] via-[#E1E1DF] to-[#9C7FC7] p-8 text-[0.9rem] text-gray-800'>
      {/* Tweet Parent Box */}
      <div className='rounded-xl bg-gray-50 px-2 py-8 sm:px-8'>
        {/* Tweet Box */}
        <div className='my-24 mx-auto flex min-w-[300px] max-w-xl rounded-3xl border border-gray-200 bg-white px-2 py-3 shadow-lg shadow-slate-600 sm:min-w-[24rem] sm:px-3'>
          {/* Profile Image */}
          <Image
            src={profileImage}
            alt='profile image'
            className='mr-3 h-12 w-12 rounded-full hover:cursor-pointer'
          ></Image>
          {/* Tweet Section */}
          <div>
            {/* Author/tweet details and options */}
            <div className='flex'>
              <div className='flex text-gray-500'>
                <p>
                  <strong className='text-gray-800 hover:cursor-pointer'>
                    Hassan
                  </strong>
                  <span className='ml-1 hover:cursor-pointer'>@hassanak92</span>
                  <span className='mx-1 '>&middot;</span>
                </p>
                <p className='hover:cursor-pointer'>Sep 26</p>
              </div>
              <Image
                src='https://res.cloudinary.com/thirus/image/upload/v1632940964/logos/options_wdtupw.svg'
                alt=''
                className='ml-auto hover:cursor-pointer'
                height={16}
                width={16}
              ></Image>
            </div>
            {/* Tweet  */}
            <div className='tweet'>
              You are amazing if you take time to comment on a tweet or YouTube
              video or a blogpost that has helped you! 🙌
            </div>
            {/* Actions buttons */}
            <div className='mt-1 flex justify-around'>
              <div className='inline-flex items-end'>
                <Image
                  className='mr-2'
                  src='https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/reply_ts2dvv.svg'
                  alt=''
                  height={17}
                  width={17}
                ></Image>
                <span className='text-[0.8rem] text-gray-600'>20</span>
              </div>
              <div className='inline-flex items-end'>
                <Image
                  className='mr-2'
                  src='https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/retweet_wkdf6j.svg'
                  alt=''
                  height={17}
                  width={17}
                ></Image>
                <span className='text-[0.8rem] text-gray-600'>17</span>
              </div>
              <div className='inline-flex items-end'>
                <Image
                  className='mr-2 '
                  src='https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/like_zmb4tf.svg'
                  alt=''
                  height={17}
                  width={17}
                ></Image>
                <span className='text-[0.8rem] text-gray-600'>215</span>
              </div>
              <div className='inline-flex items-end'>
                <Image
                  className='mr-2'
                  src='https://res.cloudinary.com/thirus/image/upload/v1632940688/logos/share_rgaloj.svg'
                  alt=''
                  height={17}
                  width={17}
                ></Image>
              </div>
              <div className='inline-flex items-end'>
                <Image
                  className='mr-2'
                  src='https://res.cloudinary.com/thirus/image/upload/v1632940964/logos/stats_jt2vsb.svg'
                  alt=''
                  height={17}
                  width={17}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
