import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import Header from './components/Header';
import {AddOn, PersonalInfo, Plan, Summary} from './components/Content';
import {IAddOn, IUserProfile} from './components/interface';

const App = () => {
  const [step, setStep] = useState(1);
  const {
    register,
    formState: {errors},
    handleSubmit,
  } = useForm<IUserProfile & IAddOn>();
  const sub = [
    {
      imageUrl: '/images/icon-arcade.svg',
      title: 'Arcade',
      price: '$9/mo',
    },
    {
      imageUrl: '/images/icon-advanced.svg',
      title: 'Advanced',
      price: '$12/mo',
    },
    {
      imageUrl: '/images/icon-pro.svg',
      title: 'Pro',
      price: '$15/mo',
    },
  ];

  const summary = {
    subTitle: 'Arcade (Monthly)',
    price: '+9/mo',
    addOns: [
      {
        title: 'storage',
        price: '+$2/mo',
      },
    ],
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const gotoStep = (des: number) => setStep(des);

  const handleConfirm = ({email, name, phone}: IUserProfile) => {
    console.log({email, name, phone});
  };

  return (
    <div className='container'>
      <Header step={step} gotoStep={gotoStep} />
      <main className='content'>
        <form
          className='form'
          onSubmit={handleSubmit((data) => handleConfirm(data))}
        >
          {step === 1 && <PersonalInfo register={register} errors={errors} />}
          {step === 2 && <Plan subcriptions={sub} />}
          {step === 3 && <AddOn register={register} />}
          {step === 4 && <Summary summary={summary} />}
        </form>

        <div className='controls'>
          {step > 1 ? (
            <button className='btn btn--prev-page' onClick={prevStep}>
              Go Back
            </button>
          ) : (
            <div />
          )}
          {step === 4 ? (
            <button className='btn btn--next-page right' type='submit'>
              Confirm
            </button>
          ) : (
            <button className='btn btn--next-page right' onClick={nextStep}>
              Next Step
            </button>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
