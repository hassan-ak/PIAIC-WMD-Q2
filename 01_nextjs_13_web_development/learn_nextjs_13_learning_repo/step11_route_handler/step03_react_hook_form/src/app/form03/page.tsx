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
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            })}
            className='border-[1px]'
          />
          {errors.email && errors.email.type === 'required' && (
            <p className='text-[#f21e08]'>Email is required.</p>
          )}
          {errors.email && errors.email.type === 'pattern' && (
            <p className='text-[#f21e08]'>Email is not valid.</p>
          )}
        </div>
        <div className='m-5 flex flex-col'>
          <label>Password</label>
          <input
            type='password'
            // name='password'
            className='border-[1px]'
            {...register('password', {
              required: true,
              minLength: 6,
            })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className='text-[#f21e08]'>Password is required.</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className='text-[#f21e08]'>
              Password should be at-least 6 characters.
            </p>
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
