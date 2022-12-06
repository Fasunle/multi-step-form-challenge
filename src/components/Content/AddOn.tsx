import React from 'react';

export default function AddOn() {
  return (
    <section className='step'>
      <div>
        <h2 className='title'>Pick add-ons</h2>
        <p className='desc'>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className='add-ons'>
        <div className='add-on'>
          <input type='checkbox' name='online' />
          <div className='detail'>
            <h3 className='title'>Online service</h3>
            <p className='desc'>Access to multiplayer games</p>
          </div>
          <p className='price'>+$1/mo</p>
        </div>
        <div className='add-on'>
          <input type='checkbox' name='storage' />
          <div className='detail'>
            <h3 className='title'>Larger storage</h3>
            <p className='desc'>Extra 1TB of cloud save</p>
          </div>
          <p className='price'>+$2/mo</p>
        </div>
        <div className='add-on'>
          <input type='checkbox' name='custom_profile' />
          <div className='detail'>
            <h3 className='title'>Customizable Profile</h3>
            <p className='desc'>Custom theme on your profile</p>
          </div>
          <p className='price'>+$2/mo</p>
        </div>
      </div>
    </section>
  );
}
