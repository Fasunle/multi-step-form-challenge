import React from 'react';

export default function PersonalInfo() {
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
          <span className='error'>Error occured</span>
        </div>
        <input className='name' placeholder='e.g Stephen King' />
      </div>
      <div>
        <div className='label'>
          <label htmlFor='email'>Email Address</label>
          <span className='error'>Error occured</span>
        </div>
        <input className='email' placeholder='e.g stephenking@lorem.com' />
      </div>
      <div>
        <div className='label'>
          <label htmlFor='phone'>Phone Number</label>
          <span className='error'>Error occured</span>
        </div>
        <input className='phone' placeholder='e.g +1 234 567 890' />
      </div>
    </section>
  );
}
