import React from 'react';

const App = () => {
  return (
    <div>
      <div className='hero'>
        <picture>
          <source
            media='(min-width: 45em)'
            srcSet='/images/bg-sidebar-desktop.svg'
          />
          <img src='/images/bg-sidebar-mobile.svg' alt='Hero' />
        </picture>
      </div>

      <header>
        <nav className='nav'>
          <ul className='nav__items' role='list'>
            <li className='nav__item'>
              <span className='numbered'>1</span>
              <div className='nav__item--info'>
                <h4 className='title'>Step 1</h4>
                <p className='desc'>Your Info</p>
              </div>
            </li>
            <li className='nav__item'>
              <span className='numbered'>2</span>
              <div className='nav__item--info'>
                <h4 className='title'>Step 2</h4>
                <p className='desc'>Select Plan</p>
              </div>
            </li>
            <li className='nav__item'>
              <span className='numbered'>3</span>
              <div className='nav__item--info'>
                <h4 className='title'>Step 3</h4>
                <p className='desc'>Pick add-ons</p>
              </div>
            </li>
            <li className='nav__item'>
              <span className='numbered'>4</span>
              <div className='nav__item--info'>
                <h4 className='title'>Step 4</h4>
                <p className='desc'>Finishing up</p>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main className='content'>
        {/* Sidebar start  */}
        Step 1 Your info Step 2 Select plan Step 3 Add-ons Step 4 Summary
        {/* Sidebar end  */}
        {/* Step 1 start  */}
        Personal info Please provide your name, email address, and phone number.
        Name e.g. Stephen King Email Address e.g. stephenking@lorem.com Phone
        Number e.g. +1 234 567 890 Next Step
        {/* Step 1 end  */}
        {/* Step 2 start  */}
        Select your plan You have the option of monthly or yearly billing.
        Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next Step
        {/* Step 2 end  */}
        {/* Step 3 start  */}
        Add-ons help enhance your gaming experience. Online service Access to
        multiplayer games +$1/mo Larger storage Extra 1TB of cloud save +$2/mo
        Customizable Profile Custom theme on your profile +$2/mo Go Back Next
        Step
        {/* Step 3 end  */}
        {/* Step 4 start  */}
        Double-check everything looks OK before confirming.
        {/* Dynamically add subscription and add-on selections here  */}
        Total (per month/year) Go Back Confirm
        {/* Step 4 end  */}
        {/* Step 5 start */}
        Thank you! Thanks for confirming your subscription! We hope you have fun
        using our platform. If you ever need support, please feel free to email
        us at support@loremgaming.com.
        {/* Step 5 end  */}
        <div className='controls'>
          <button className='btn btn--prev-page'>Go Back</button>
          <button className='btn btn--next-page'>Next Step</button>
        </div>
      </main>
    </div>
  );
};

export default App;
