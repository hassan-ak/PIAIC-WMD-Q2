import React from 'react';
import Image from 'next/image';

export default function Chapter17() {
  return (
    <div>
      <h1 className='my-5 text-center text-3xl font-bold'>
        Grid Template Rows
      </h1>
      <div className='mb-5 h-2 bg-black'></div>
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      {/*************************************************************/}
      <div className='leading-6 text-[#333]'>
        <div className='grid min-h-[75vh] grid-rows-[auto,1fr,auto]'>
          <header className='bg-[#E0F2FE] p-8'>
            <h2 className='m-0'>Header</h2>
          </header>
          <div className='p-8'>
            <h1 className='m-0'>Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              perferendis repellat, cum ratione fugit dolorum sequi dolores odit
              commodi cupiditate ab excepturi deserunt laborum saepe,
              praesentium id deleniti aperiam eaque.
            </p>
            <p>
              Sed egestas, ante et vulputate volutpat, eros pede semper est,
              vitae luctus metus libero eu augue. Morbi purus libero, faucibus
              adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
              elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
              volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
              pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
              fermentum et, dapibus sed, urna.
            </p>
          </div>
          <footer className='bg-[#E0F2FE] p-8'>
            <h3 className='m-0'>Footer</h3>
          </footer>
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
