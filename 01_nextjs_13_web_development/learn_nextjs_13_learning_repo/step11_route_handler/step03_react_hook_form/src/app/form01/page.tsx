'use client';

import React, { useState } from 'react';

export default function Form01() {
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <div className='mx-[10px] my-auto w-[90%] border-[1px] px-10 font-sans text-[20px] sm:w-[60%]'>
      <div className='App'>
        <form onSubmit={handleSubmit}>
          <div className='mb-[10px] flex flex-col'>
            <label className='mb-[5px] w-[20%] pr-[20px]'>Email</label>
            <input
              className='w-[40%] border-[2px] p-[5px]'
              type='text'
              name='email'
              value={state.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-[10px] flex flex-col'>
            <label className='mb-[5px] w-[20%] pr-[20px]'>Password</label>
            <input
              className='w-[40%] border-[2px] p-[5px]'
              type='password'
              name='password'
              value={state.password}
              onChange={handleInputChange}
            />
          </div>
          <div className='mb-[10px] flex flex-col'>
            <label className='mb-[5px] w-[20%] pr-[20px]'></label>
            <button
              type='submit'
              className='mw-[150px] border-[2px] px-[10px] py-[5px]'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
