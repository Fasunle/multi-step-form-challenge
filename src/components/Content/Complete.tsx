import React from 'react';

export default function Complete() {
  return (
    <section className='step'>
      <div className='complete'>
        <div className='imgContainer'>
          <img
            src='/images/icon-thank-you.svg'
            alt='thank you icon'
            className='icon'
          />
        </div>
        <h2 className='thank-you'>Thank you!</h2>
        <p className='description'>
          Thank you! Thanks for confirming your subscription! We hope you have
          fun using our platform. If you ever need support, please feel free to
          email us at support@loremgaming.com.
        </p>
      </div>
    </section>
  );
}
