import React from 'react';

type HeaderPropsType = {
  step: number;
  gotoStep: (step: number) => void;
};

export default function Header({
  step,
  gotoStep,
  isValidated,
}: HeaderPropsType & {isValidated: boolean}) {
  const isValid = (step: number) => {
    if (isValidated) gotoStep(step);
  };
  return (
    <header>
      <nav className='nav'>
        <ul className='nav__items' role='list'>
          <li className={`nav__item${step === 1 ? ' active' : ''}`}>
            <button className='numbered' onClick={() => gotoStep(1)}>
              1
            </button>
            <div className='nav__item--info'>
              <h4 className='title'>Step 1</h4>
              <p className='desc'>Your Info</p>
            </div>
          </li>
          <li className={`nav__item${step === 2 ? ' active' : ''}`}>
            <button className='numbered' onClick={() => isValid(2)}>
              2
            </button>
            <div className='nav__item--info'>
              <h4 className='title'>Step 2</h4>
              <p className='desc'>Select Plan</p>
            </div>
          </li>
          <li className={`nav__item${step === 3 ? ' active' : ''}`}>
            <button className='numbered' onClick={() => isValid(3)}>
              3
            </button>
            <div className='nav__item--info'>
              <h4 className='title'>Step 3</h4>
              <p className='desc'>Add-ons</p>
            </div>
          </li>
          <li className={`nav__item${step === 4 ? ' active' : ''}`}>
            <button className='numbered' onClick={() => isValid(4)}>
              4
            </button>
            <div className='nav__item--info'>
              <h4 className='title'>Step 4</h4>
              <p className='desc'>Summary</p>
            </div>
          </li>
        </ul>
      </nav>
      <picture className='bg-sidebar'>
        <source
          media='(min-width: 40em)'
          srcSet='/images/bg-sidebar-desktop.svg'
        />
        <img src='/images/bg-sidebar-mobile.svg' alt='' />
      </picture>
    </header>
  );
}
