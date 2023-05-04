//*****************//
//*** Blog Page ***//
//*****************//

import React from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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

//******************************************************//
//*** Function to extract blog slugs from books data ***//
//*** Slugs to be used for geberating static param   ***//
//******************************************************//
async function getSlugList() {
  const blogs = await getBlogs();
  const slugList: string[] = [];
  blogs.items.map((blog: { fields: { slug: string } }) => {
    slugList.push(blog.fields.slug);
  });
  return slugList;
}

//**************************//
//* Generate Static params *//
//**************************//
export async function generateStaticParams() {
  let blogSlugs: string[] = await getSlugList();
  return blogSlugs.map((blogSlug) => ({
    blog: blogSlug,
  }));
}

export default async function page({ params }: { params: { blog: string } }) {
  //*********************************//
  //*** get blogs from contentful ***//
  //*********************************//
  const blogs = await getBlogs();
  //*************************************//
  //*** extract selected blog data    ***//
  //***   post image url              ***//
  //***   auhor details               ***//
  //***   author image created        ***//
  //***   date ande time blog created ***//
  //*************************************//
  let selectedBog = blogs.items.find(
    (obj: { fields: { slug: string } }) => obj.fields.slug === params.blog
  );
  let postImageUrl = blogs.includes.Asset.find(
    (obj: { sys: { id: any } }) =>
      obj.sys.id === selectedBog?.fields.postImage.sys.id
  )?.fields.file.url;
  let authorObject = blogs.includes.Entry.find(
    (obj: { sys: { id: any } }) =>
      obj.sys.id === selectedBog?.fields.createdBy.sys.id
  );
  let authorImageUrl = blogs.includes.Asset.find(
    (obj: { sys: { id: any } }) =>
      obj.sys.id === authorObject?.fields.profilePicture.sys.id
  )?.fields.file.url;
  const dateCreated: string = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(selectedBog ? selectedBog.fields.created : ''));
  const timeCreated = new Date(
    selectedBog ? selectedBog.fields.created : ''
  ).toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  // Blog Details
  return (
    <div className='flex flex-col items-center justify-center space-y-5 px-5'>
      {/* Blog tile */}
      <div className='text-center text-2xl font-semibold text-gray-700'>
        {selectedBog?.fields.title}
      </div>
      {/* Blog Image */}
      <div className='min-w-7xl overflow-hidden'>
        <Image
          src={'https:' + postImageUrl}
          alt=''
          width='500'
          height='500'
          className='h-72 rounded-lg bg-gradient-to-br from-[#FFEAF6] via-[#E1E1DF] to-[#9C7FC7] object-cover'
          priority
        />
      </div>
      {/* Blog Body */}
      <div className='px-5 text-justify leading-6'>
        {selectedBog?.fields.body ? (
          documentToReactComponents(selectedBog?.fields.body)
        ) : (
          <></>
        )}
      </div>
      {/* Author details */}
      <div className='mb-10 flex items-center justify-end px-6 pb-2 leading-none'>
        {/* Profile image */}
        <Image
          src={'https:' + authorImageUrl}
          alt=''
          width='50'
          height='50'
          className='mr-4 h-11 w-11 rounded-full'
          priority
        />
        {/* Name, date and time */}
        <div>
          <p className='text-sm font-bold text-gray-600'>
            {authorObject?.fields.name}
          </p>
          <span className='text-sm text-gray-400'>{dateCreated}</span>
          <p className='text-sm text-gray-400'>{timeCreated}</p>
        </div>
      </div>
    </div>
  );
}
