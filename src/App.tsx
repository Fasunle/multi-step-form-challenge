import React, {useState} from 'react';
import Header from './components/Header';
import {AddOn, PersonalInfo, Plan, Summary} from './components/Content';
import {IStore} from './components/interface';
import ControlSteps from './components/ControlSteps';

const initialStore: IStore = {
  email: '',
  name: '',
  phone: '',
  subscription: {
    addOns: [],
    price: '$9/mo',
    title: 'Arcade',
    type: 'monthly',
  },
};
const App = () => {
  const [store, updateStore] = useState<IStore>(initialStore);
  const [step, setStep] = useState(1);

  const time = store.subscription.type === 'yearly';
  const sub = [
    {
      imageUrl: '/images/icon-arcade.svg',
      title: 'Arcade',
      monthly: '$9/mo',
      yearly: '$99/yr',
    },
    {
      imageUrl: '/images/icon-advanced.svg',
      title: 'Advanced',
      monthly: '$12/mo',
      yearly: '$120/yr',
    },
    {
      imageUrl: '/images/icon-pro.svg',
      title: 'Pro',
      monthly: '$15/mo',
      yearly: '$150/yr',
    },
  ];

  const getSummary = () => {
    const defaultInfo = {
      imageUrl: '/images/icon-arcade.svg',
      title: 'Arcade',
      monthly: '$9/mo',
      yearly: '$99/yr',
    };
    const info =
      sub.find((item) => item.title === store.subscription.title) ??
      defaultInfo;
    return {
      subTitle: `${store.subscription.title} (${time ? 'Yearly' : 'Monthly'})`,
      monthly: info.monthly,
      yearly: info.yearly,
      addOns: store.subscription.addOns,
    };
  };

  const gotoStep = (des: number) => setStep(des);

  return (
    <div className='container'>
      <Header step={step} gotoStep={gotoStep} />
      <main className='content'>
        {step === 1 && <PersonalInfo step={step} updateStep={setStep} />}
        {step === 2 && <Plan store={store} updateStore={updateStore} />}
        {step === 3 && <AddOn store={store} updateStore={updateStore} />}
        {step === 4 && (
          <Summary summary={getSummary()} isYear={time} gotoStep={gotoStep} />
        )}
        <ControlSteps step={step} updateStep={setStep} />
      </main>
    </div>
  );
};

export default App;
