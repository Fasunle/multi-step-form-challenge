import React from 'react';
import {PersonalType} from '../interface';

export default function PersonalInfo({register, errors}: PersonalType) {
  return (
    <section className='step'>
      <div>
        <h2 className='title'>Personal Info</h2>
        <p className='desc'>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div>
        <div className='label'>
          <label htmlFor='name'>Name</label>
          <span className='error'>{errors.name?.message}</span>
        </div>
        <input
          {...register('name', {required: true})}
          className='name'
          placeholder='e.g Stephen King'
        />
      </div>
      <div>
        <div className='label'>
          <label htmlFor='email'>Email Address</label>
          <span className='error'>{errors.email?.message}</span>
        </div>
        <input
          {...register('email', {
            pattern: {
              value:
                /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/i,
              message: 'Please provide a valid email',
            },
            required: true,
          })}
          className='email'
          placeholder='e.g stephenking@lorem.com'
        />
      </div>
      <div>
        <div className='label'>
          <label htmlFor='phone'>Phone Number</label>
          <span className='error'>{errors.phone?.message}</span>
        </div>
        <input
          {...register('phone', {required: true})}
          className='phone'
          placeholder='e.g +1 234 567 890'
        />
      </div>
    </section>
  );
}
