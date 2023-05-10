'use client';

import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClickH={handleClick} />
      <MyButton count={count} onClickH={handleClick} />
    </div>
  );
}

function MyButton(params: { count: number; onClickH: any }) {
  return (
    <button
      onClick={params.onClickH}
      className='m-5 p-2 rounded-xl bg-orange-600'
    >
      Clicked {params.count} times
    </button>
  );
}
