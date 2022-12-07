import React, {useState} from 'react';
import {IStore, PlanPropTypes} from '../interface';

export default function Plan({
  store,
  updateStore,
}: {
  store: IStore;
  updateStore(store: IStore): void;
}) {
  const [select, setSelect] = useState('Arcade');

  const isYear = store.subscription.type === 'yearly';

  const toggleTime = () => {
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
    yearly,
    isSelected,
    discount,
    ...props
  }: PlanPropTypes & {
    onClick(): void;
    isSelected: boolean;
    monthly: number;
    yearly: number;
    discount: number;
  }) => (
    <div
      className={`subscription ${isSelected ? 'select' : ''}`}
      key={title}
      {...props}
    >
      <div className='imgContainer'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='details'>
        <h4 className='title'>{title}</h4>
        <p className='price'>{isYear ? `$${yearly}/yr` : `$${monthly}/mo`}</p>
        {isYear && (
          <p className='discount'>
            {discount > 1
              ? `${discount} months free`
              : `${discount} month free`}
          </p>
        )}
      </div>
    </div>
  );

  const handleUpdateStoreTitle = (title: string) => {
    updateStore({
      ...store,
      subscription: {...store.subscription, title},
    });
    setSelect(title);
  };

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
          monthly={9}
          yearly={99}
          onClick={() => handleUpdateStoreTitle('Arcade')}
          isSelected={select === 'Arcade'}
          discount={2}
        />
        <Subscription
          imageUrl='/images/icon-advanced.svg'
          title='Advanced'
          monthly={12}
          yearly={120}
          onClick={() => handleUpdateStoreTitle('Advanced')}
          isSelected={select === 'Advanced'}
          discount={2}
        />
        <Subscription
          imageUrl='/images/icon-pro.svg'
          title='Pro'
          monthly={15}
          yearly={150}
          onClick={() => handleUpdateStoreTitle('Pro')}
          isSelected={select === 'Pro'}
          discount={2}
        />
      </div>

      <div className='subscriptions__control select'>
        <span className={isYear ? '' : 'time--month'}>Monthly</span>
        <div className='slider'>
          <button
            draggable={true}
            type='button'
            className={`btn btn--slider ${isYear ? 'yearly' : ''}`}
            onDragEnd={() => toggleTime()}
            onClick={() => toggleTime()}
          ></button>
        </div>
        <span className={isYear ? 'time--year' : ''}>Yearly</span>
      </div>
    </section>
  );
}
