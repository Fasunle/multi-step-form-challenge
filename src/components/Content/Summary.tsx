import React from 'react';
import {SummaryPropTypes} from '../interface';

export default function Summary({summary}: {summary: SummaryPropTypes}) {
  return (
    <section className='step'>
      <div>
        <h2 className='title'> Finishing up</h2>
        <p className='desc'>
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className='summary'>
        <div className='type'>
          <h5 className='sub--title'>
            {summary.subTitle}
            <button className='btn btn--change'>Change</button>
          </h5>
          <p className='price'>{summary.price}</p>
        </div>
        <hr className='divider' />
        {summary.addOns.map((addOn) => (
          <div className='type' key={addOn.title}>
            <h6 className='title'>{addOn.title}</h6>
            <p className='price'>{addOn.price}</p>
          </div>
        ))}
      </div>

      <div className='total'>
        <span className='title'>Total (per Month)</span>
        <span className='amount'>+$12/mo</span>
      </div>
    </section>
  );
}
