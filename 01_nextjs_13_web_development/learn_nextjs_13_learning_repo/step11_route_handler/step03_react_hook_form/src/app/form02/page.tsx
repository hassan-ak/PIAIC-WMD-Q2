'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form01() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className='m-10 border-[1px]'>
      <form
        className='flex flex-col space-y-10'
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className='m-5 flex flex-col'>
          <label>Email</label>
          <input
            type='text'
            // name='email'
            {...register('email')}
            className='border-[1px]'
          />
        </div>
        <div className='m-5 flex flex-col'>
          <label>Password</label>
          <input
            type='password'
            // name='password'
            className='border-[1px]'
            {...register('password')}
          />
        </div>
        <div className='m-5 flex flex-col'>
          <label></label>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
