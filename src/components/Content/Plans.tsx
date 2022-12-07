import React from 'react';
import {IStore, PlanPropTypes} from '../interface';

export default function Plan({
  store,
  updateStore,
}: {
  store: IStore;
  updateStore(store: IStore): void;
}) {
  const toggleTime = () => {
    const isYear = store.subscription.type === 'yearly';
    if (isYear) {
      updateStore({
        ...store,
        subscription: {...store.subscription, type: 'monthly'},
      });
    } else {
      updateStore({
        ...store,
        subscription: {...store.subscription, type: 'yearly'},
      });
    }
  };
  const Subscription = ({
    imageUrl,
    title,
    monthly,
    price,
    yearly,
    ...props
  }: PlanPropTypes & {onClick(): void}) => (
    <div className='subscription' key={title} {...props}>
      <div className='imgContainer'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <p className='price'>
          {store.subscription.type === 'yearly' ? yearly : monthly}
        </p>
      </div>
    </div>
  );
  return (
    <section className='step plan'>
      <div>
        <h2 className='title'>Select your plan</h2>
        <p className='desc'>
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className='subscriptions'>
        <Subscription
          imageUrl='/images/icon-arcade.svg'
          title='Arcade'
          monthly='$9/mo'
          yearly='$99/year'
          onClick={() =>
            updateStore({
              ...store,
              subscription: {...store.subscription, title: 'Arcade'},
            })
          }
        />
        <Subscription
          imageUrl='/images/icon-advanced.svg'
          title='Advanced'
          monthly='$12/mo'
          yearly='$120/year'
          onClick={() =>
            updateStore({
              ...store,
              subscription: {...store.subscription, title: 'Advanced'},
            })
          }
        />
        <Subscription
          imageUrl='/images/icon-pro.svg'
          title='Pro'
          monthly='$15/mo'
          yearly='$150/year'
          onClick={() =>
            updateStore({
              ...store,
              subscription: {...store.subscription, title: 'Pro'},
            })
          }
        />
      </div>

      <div className='subscriptions__control'>
        <span className='time--month'>Monthly</span>
        <div className='slider'>
          <button
            type='button'
            className={`btn btn--slider ${
              store.subscription.type === 'yearly' ? 'yearly' : ''
            }`}
            onClick={() => toggleTime()}
          ></button>
        </div>
        <span className='time--year'>Yearly</span>
      </div>
    </section>
  );
}
