import React, {useState} from 'react';
import {PlanPropTypes} from '../interface';

export default function Plan({subcriptions}: {subcriptions: PlanPropTypes[]}) {
  const [isYear, toggleTime] = useState(false);
  return (
    <section className='step plan'>
      <div>
        <h2 className='title'>Select your plan</h2>
        <p className='desc'>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className='subscriptions'>
        {subcriptions.map((subscription) => (
          <div className='subscription' key={subscription.title}>
            <div className='imgContainer'>
              <img src={subscription.imageUrl} alt={subscription.title} />
            </div>
            <div className='details'>
              <h4 className='title'>{subscription.title}</h4>
              <p className='price'>{subscription.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='subscriptions__control'>
        <span className='time--month'>Monthly</span>
        <div className='slider'>
          <button
            type='button'
            className={`btn btn--slider ${isYear ? 'yearly' : ''}`}
            onClick={() => toggleTime(!isYear)}
          ></button>
        </div>
        <span className='time--year'>Yearly</span>
      </div>
    </section>
  );
}
