import React, {useState} from 'react';
import {IStore} from '../interface';

export default function AddOn({
  store,
  updateStore,
}: {
  store: IStore;
  updateStore(store: IStore): void;
}) {
  const [select, setSelect] = useState({
    online: '',
    storage: '',
    customProfile: '',
  });

  const handleSelectOnlineAddOn = (add: boolean) => {
    const onlineAddOn = {
      title: 'Online service',
      monthly: 1,
      yearly: 10,
    };
    if (add) {
      setSelect({...select, online: 'select'});
      updateStore({
        ...store,
        subscription: {
          ...store.subscription,
          addOns: [...store.subscription.addOns, onlineAddOn],
        },
      });
    } else {
      setSelect({...select, online: ''});
      const others = store.subscription.addOns.filter(
        (item) => item.title !== onlineAddOn.title,
      );
      updateStore({
        ...store,
        subscription: {...store.subscription, addOns: others},
      });
    }
  };
  const handleSelectStorageAddOn = (add = true) => {
    const extraStorage = {
      title: 'Larger storage',
      monthly: 2,
      yearly: 20,
    };
    if (add) {
      setSelect({...select, storage: 'select'});
      const isAdded = store.subscription.addOns.find(
        (item) => item.title === extraStorage.title,
      );
      !isAdded &&
        updateStore({
          ...store,
          subscription: {
            ...store.subscription,
            addOns: [...store.subscription.addOns, extraStorage],
          },
        });
    } else {
      setSelect({...select, storage: ''});
      const others = store.subscription.addOns.filter(
        (item) => item.title !== extraStorage.title,
      );
      updateStore({
        ...store,
        subscription: {...store.subscription, addOns: others},
      });
    }
  };
  const handleSelectCustomProfileAddOn = (add = true) => {
    const customProfileAddOn = {
      title: 'Customizable profile',
      monthly: 1,
      yearly: 10,
    };

    if (add) {
      setSelect({...select, customProfile: 'select'});
      const isAdded = store.subscription.addOns.find(
        (item) => item.title === customProfileAddOn.title,
      );
      !isAdded &&
        updateStore({
          ...store,
          subscription: {
            ...store.subscription,
            addOns: [...store.subscription.addOns, customProfileAddOn],
          },
        });
    } else {
      setSelect({...select, customProfile: ''});
      const others = store.subscription.addOns.filter(
        (item) => item.title !== customProfileAddOn.title,
      );
      updateStore({
        ...store,
        subscription: {...store.subscription, addOns: others},
      });
    }
  };

  return (
    <section className='step'>
      <div>
        <h2 className='title'>Pick add-ons</h2>
        <p className='desc'>Add-ons help enhance your gaming experience.</p>
      </div>

      <div className='add-ons'>
        <div className={`add-on ${select.online}`}>
          <input
            type='checkbox'
            onChange={(e) => handleSelectOnlineAddOn(e.target.checked)}
          />
          <div className='detail'>
            <h3 className='title'>Online service</h3>
            <p className='desc'>Access to multiplayer games</p>
          </div>
          <p className='price'>+$1/mo</p>
        </div>
        <div className={`add-on ${select.storage}`}>
          <input
            type='checkbox'
            onChange={(e) => handleSelectStorageAddOn(e.target.checked)}
          />
          <div className='detail'>
            <h3 className='title'>Larger storage</h3>
            <p className='desc'>Extra 1TB of cloud save</p>
          </div>
          <p className='price'>+$2/mo</p>
        </div>
        <div className={`add-on ${select.customProfile}`}>
          <input
            type='checkbox'
            onChange={(e) => handleSelectCustomProfileAddOn(e.target.checked)}
          />
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
