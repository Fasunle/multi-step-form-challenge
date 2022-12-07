import React from 'react';
import {useForm} from 'react-hook-form';
import {ControlStepsPropTypes, IUserProfile} from '../interface';

export default function PersonalInfo({
  step,
  updateStep,
}: ControlStepsPropTypes) {
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IUserProfile>();

  const validateProfile = (payload: IUserProfile) => {
    updateStep(step + 1);
  };
  return (
    <section className='step'>
      <div>
        <h2 className='title'>Personal Info</h2>
        <p className='desc'>
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form onSubmit={handleSubmit(validateProfile)} className='form'>
        <div>
          <div className='label'>
            <label htmlFor='name'>Name</label>
            <span className='error'>{errors.name?.message}</span>
          </div>
          <input
            {...register('name', {required: 'Name is required'})}
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
              required: 'Email is required',
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
            {...register('phone', {
              min: {
                message: 'Phone number must be atleast 9 digits long',
                value: 9,
              },
              // https://stackoverflow.com/questions/3256547/regex-simple-phone-number
              pattern: {
                message: 'Invalid phone number',
                value: /^[0-9()-]+$/i,
              },
              required: 'Phone number is required',
            })}
            className='phone'
            placeholder='e.g +1 234 567 890'
          />
        </div>
        <div className='controls'>
          <div />
          <button className='btn btn--next-page right' type='submit'>
            Next Step
          </button>
        </div>
      </form>
    </section>
  );
}
