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
            {...register('email', {
              required: 'Email is required.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Email is not valid.',
              },
            })}
            className='border-[1px]'
          />
          {errors.email?.message && (
            <p className='text-[#f21e08]'>{errors.email?.message.toString()}</p>
          )}
        </div>
        <div className='m-5 flex flex-col'>
          <label>Password</label>
          <input
            type='password'
            // name='password'
            className='border-[1px]'
            {...register('password', {
              required: 'Password is required.',
              minLength: {
                value: 6,
                message: 'Password should be at-least 6 characters.',
              },
            })}
          />
          {errors.password && (
            <p className='errorMsg'>{errors.password.message?.toString()}</p>
          )}
        </div>
        <div className='m-5 flex flex-col'>
          <label></label>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}
