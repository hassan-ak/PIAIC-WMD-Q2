//*****************//
//*** Home Page ***//
//*****************//
import Link from 'next/link';
import Image from 'next/image';

//*********************************************//
//*** Function to get blogs from contentful ***//
//*********************************************//
async function getBlogs() {
  const res = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?access_token=${process.env.CONTENTFUL_ACCESS_KEY}&content_type=blog`
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Home() {
  //*********************************//
  //*** get blogs from contentful ***//
  //*********************************//
  const blogs = await getBlogs();
  return (
    <div className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-8 p-8'>
      {/***********************************/}
      {/*** Loop over blogs             ***/}
      {/*** create card for single blog ***/}
      {/*** create card for single blog ***/}
      {/*** extract blog data           ***/}
      {/***********************************/}
      {blogs.items.map((blog: any) => {
        //******************************//
        //*** extract blog data      ***//
        //***   cover image url      ***//
        //***   auhor details        ***//
        //***   author image created ***//
        //***   date blog created    ***//
        //******************************//
        let coverImageUrl = blogs.includes.Asset.find(
          (obj: { sys: { id: any } }) =>
            obj.sys.id === blog.fields.coverImage.sys.id
        )?.fields.file.url;
        let authorObject = blogs.includes.Entry.find(
          (obj: { sys: { id: any } }) =>
            obj.sys.id === blog.fields.createdBy.sys.id
        );
        let authorImageUrl = blogs.includes.Asset.find(
          (obj: { sys: { id: any } }) =>
            obj.sys.id === authorObject?.fields.profilePicture.sys.id
        )?.fields.file.url;
        const dateCreated: string = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }).format(new Date(blog.fields.created));
        // Blog card
        return (
          <div key={blog.sys.id} className='rounded-lg bg-white'>
            {/* Cover Image */}
            <Image
              src={'https:' + coverImageUrl}
              alt=''
              width='500'
              height='500'
              className='h-48 w-full rounded-t-lg bg-gradient-to-br from-[#FFEAF6] via-[#E1E1DF] to-[#9C7FC7] object-cover'
              priority
            />
            {/* Blog tile and summary */}
            <div className='p-6'>
              <h2 className='text-2xl font-bold'>{blog.fields.title}</h2>
              <p className='mb-3; mt-4 text-justify'>{blog.fields.summary}</p>
            </div>
            {/* Author details */}
            <div className='my-2 flex items-center px-6 pb-2 leading-none'>
              {/* Profile image */}
              <Image
                src={'https:' + authorImageUrl}
                alt=''
                width='50'
                height='50'
                className='mr-4 h-11 w-11 rounded-full'
                priority
              />
              {/* Name and date created */}
              <div>
                <p className='text-sm font-bold text-gray-600'>
                  {authorObject?.fields.name}
                </p>
                <span className='text-sm text-gray-400'>{dateCreated}</span>
              </div>
              {/* Readmore Button */}
              <div className='ml-auto rounded-full bg-gray-100 p-3'>
                <Link href={blog.fields.slug}>
                  <Image
                    src='https://res.cloudinary.com/thirus/image/upload/v1632854290/logos/icon-share_frvrfu.svg'
                    alt=''
                    width='20'
                    height='20'
                    className=' h-5 w-5 rounded-full'
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
