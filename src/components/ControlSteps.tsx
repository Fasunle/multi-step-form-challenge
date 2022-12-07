import React from 'react';
import {ControlStepsPropTypes} from './interface';

export default function ControlSteps({
  step,
  updateStep,
}: ControlStepsPropTypes) {
  const prevStep = () => {
    if (step > 1) updateStep(step - 1);
  };

  const nextStep = () => {
    if (step < 4) updateStep(step + 1);
  };

  if (step === 4)
    return (
      <div className='controls'>
        <button className='btn btn--prev-page' onClick={prevStep}>
          Go Back
        </button>
        <button
          className='btn btn--next-page right'
          type='submit'
          onClick={() => {}}
        >
          Confirm
        </button>
      </div>
    );

  return (
    <div className='controls'>
      {step > 1 ? (
        <button className='btn btn--prev-page' onClick={prevStep}>
          Go Back
        </button>
      ) : (
        <div />
      )}
      {step !== 4 && (
        <button className='btn btn--next-page right' onClick={nextStep}>
          Next Step
        </button>
      )}
    </div>
  );
}
