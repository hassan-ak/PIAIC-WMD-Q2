'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Form01() {
  const { reset } = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '---',
      password: 'Aa123456!',
    },
  });
  const onSubmit = (data: any) => {
    reset();
    console.log('==>', data);
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
              required: true,
              validate: {
                checkLength: (value) => value.length >= 6,
                matchPattern: (value) =>
                  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                    value
                  ),
              },
            })}
          />
          {errors.password?.type === 'required' && (
            <p className='text-[#f21e08]'>Password is required.</p>
          )}
          {errors.password?.type === 'checkLength' && (
            <p className='text-[#f21e08]'>
              Password should be at-least 6 characters.
            </p>
          )}
          {errors.password?.type === 'matchPattern' && (
            <p className='text-[#f21e08]'>
              Password should contain at least one uppercase letter, lowercase
              letter, digit, and special symbol.
            </p>
          )}
        </div>
        <div className='m-5 flex flex-col'>
          <label></label>
          <button
            type='submit'
            onClick={() => {
              reset();
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
