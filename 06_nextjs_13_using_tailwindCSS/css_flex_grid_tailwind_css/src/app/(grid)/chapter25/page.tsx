import React from 'react';
import Image from 'next/image';

export default function Chapter25() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Grid Row</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-700'>
        <form className='my-8 mx-auto grid max-w-2xl grid-cols-2 gap-6 border border-gray-300 p-8'>
          <div>
            <label className='block'> Full Name </label>
            <input
              className='mt-1 w-full resize-none rounded-md border border-gray-300 py-2 px-3'
              type='text'
              name='name'
              placeholder='Full Name'
            />
          </div>
          <div>
            <label className='block'> Email Address </label>
            <input
              className='mt-1 w-full resize-none rounded-md border border-gray-300 py-2 px-3'
              type='email'
              name='email'
              placeholder='Email Address'
            />
          </div>
          <div className='col-start-2 row-start-1 row-end-3'>
            <label className='block'> Message </label>
            <textarea
              name='message'
              placeholder='Your Message'
              rows={5}
              className='mt-1 w-full resize-none rounded-md border border-gray-300 py-2 px-3'
            ></textarea>
          </div>
          <button className='col-span-full inline-block rounded-full bg-red-500 py-3 px-9 font-bold text-white'>
            Send a Message
          </button>
        </form>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='p-8 text-gray-700'>
        <section className='mx-auto grid max-w-6xl gap-x-8 sm:grid-cols-2 md:grid-cols-3'>
          <Image
            className='m-auto w-full max-w-md sm:row-start-1 sm:row-end-3 md:col-start-2 md:row-end-2'
            src='https://res.cloudinary.com/thirus/image/upload/v1635003545/images/mobile-ux_yc0c3w.png'
            alt=''
            width={500}
            height={500}
          />
          <div className='md:col-start-1 md:text-right'>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              List Building
            </h3>
            <p className='mt-1'>
              It&#39;s very easy to start creating email lists for your
              marketing actions, give it a try
            </p>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              Campaign Tracker
            </h3>
            <p className='mt-1'>
              Campaigns is a feature we&#39;ve created since the beginning and
              it&#39;s at the core of Lomar
            </p>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              Analytics Tool
            </h3>
            <p className='mt-1'>
              Lomar collects all the necessary data to help you analyse
              different situations
            </p>
          </div>
          <div className='sm:col-start-2 md:col-start-3'>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              Admin Control
            </h3>
            <p className='mt-1'>
              Rights of users and admins can easily be managed through the
              control panel
            </p>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              Integration Setup
            </h3>
            <p className='mt-1'>
              We&#39;re providing a step-by-step integration session to
              implement automation
            </p>
            <h3 className='mt-4 text-xl font-bold text-blue-800'>
              Help Line Support
            </h3>
            <p className='mt-1'>
              Quality support is our top priority so please contact us for any
              problem you encounter
            </p>
          </div>
        </section>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='p-8 bg-gray-100 text-gray-700'>
        <section className='mx-auto grid gap-8 lg:grid-cols-4'>
          <div className='p-8 rounded-lg bg-indigo-600 text-white lg:col-span-2'>
            <h3 className='font-bold text-2xl'>
              I received a job offer mid-course, and the subjects I learned were
              current, if not more so, in the company I joined. I honestly feel
              I got every penny’s worth.
            </h3>
            <p className='mt-4 opacity-70'>
              “I was an EMT for many years before I joined the bootcamp. I’ve
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I’ve successfully switched
              careers, working as a Software Engineer at a VR startup.”
            </p>
          </div>
          <div className='p-8 rounded-lg bg-gray-600 text-white'>
            <h3 className='font-bold text-2xl'>The team was very supportive and kept me motivated</h3>
            <p className='mt-4 opacity-70'>
              “I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I’ve made in myself.”
            </p>
          </div>
          <div className='p-8 rounded-lg bg-white lg:row-start-2'>
            <h3 className='font-bold text-2xl'>An overall wonderful and rewarding experience</h3>
            <p className='mt-4 opacity-70'>
              “Thank you for the wonderful experience! I now have a job I really
              enjoy, and make a good living while doing something I love.”
            </p>
          </div>
          <div className='p-8 rounded-lg bg-gray-900 text-white lg:col-span-2'>
            <h3 className='font-bold text-2xl'>
              Awesome teaching support from TAs who did the bootcamp themselves.
              Getting guidance from them and learning from their experiences was
              easy.
            </h3>
            <p className='mt-4 opacity-70'>
              “The staff seem genuinely concerned about my progress which I find
              really refreshing. The program gave me the confidence necessary to
              be able to go out in the world and present myself as a capable
              junior developer. The standard is above the rest. You will get the
              personal attention you need from an incredible community of smart
              and amazing people.”
            </p>
          </div>
          <div className='p-8 rounded-lg bg-white lg:col-start-4 lg:row-span-2 lg:row-start-1'>
            <h3 className='font-bold text-2xl'>Such a life-changing experience. Highly recommended!</h3>
            <p className='mt-4 opacity-70'>
              “Before joining the bootcamp, I’ve never written a line of code. I
              needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I’ve often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend!”
            </p>
          </div>
        </section>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className=''></div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}
