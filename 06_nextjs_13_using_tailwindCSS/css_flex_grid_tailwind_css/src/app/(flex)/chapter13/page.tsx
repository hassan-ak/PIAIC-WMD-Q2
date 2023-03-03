import React from 'react';
import Image from 'next/image';

export default function Chapter13() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>Align Content</h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='text-gray-800'>
        <div className='flex min-h-screen w-auto max-w-none flex-wrap content-center justify-center bg-indigo-200 p-8'>
          <h1 className='flex-grow-1 flex-shrink-1 mb-6 basis-full text-center text-4xl font-bold'>
            What people are saying about my eBook
          </h1>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;Just ordered my copy! Shruti is awesome and I suck at grid.
              <br />
              No brainer.&#34;
            </p>
            <span>
              <strong>- Caleb Porzio</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;It&#39;s the best e-book experience I&#39;ve had on this
              subject. Might even understand this Flex/Grid stuff myself after
              all.&#34;
            </p>
            <span>
              <strong>- Lucian Tartea</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;I think there is a 0 missing at the end of these prices. $8
              for this much awesomeness? It should be 800!&#34;
            </p>
            <span>
              <strong>- Jimi Wikman</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;I love that you have used real world examples to describe the
              concepts which is very helpful to understand.&#34;
            </p>
            <span>
              <strong>- Sumudu Siriwardana</strong>
            </span>
          </div>
          <div className='m-4 min-w-[200px] max-w-sm rounded-xl bg-white p-7'>
            <p>
              &#34;My CSS Grid abilities aren&#39;t quite where I want them to
              be so I&#39;m excited to dive into the full release&#34;
            </p>
            <span>
              <strong>- Jacob Foster</strong>
            </span>
          </div>
        </div>
      </div>
      <div className='my-5 h-1 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
    </div>
  );
}
