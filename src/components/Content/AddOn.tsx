import React, {useState} from 'react';
import {AddOnType} from '../interface';

export default function AddOn({register}: AddOnType) {
  const [select, setSelect] = useState({
    online: '',
    storage: '',
    customProfile: '',
  });

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
            {...register('online')}
            onChange={(e) =>
              setSelect({...select, online: e.target.checked ? 'select' : ''})
            }
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
            {...register('storage')}
            onChange={(e) =>
              setSelect({...select, storage: e.target.checked ? 'select' : ''})
            }
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
            {...register('customProfile')}
            onChange={(e) =>
              setSelect({
                ...select,
                customProfile: e.target.checked ? 'select' : '',
              })
            }
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
