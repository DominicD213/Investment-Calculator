import React from 'react';
import LabelSection from '../microComponents/LabelSection';

const UserInputs = ({ onchange, objectStateValue }) => {
    console.log("objectStateValue in UserInputs component:", objectStateValue);

  return (
    <div id='user-input'>
      <div className='input-group'>
        <LabelSection
          labelTitle='Initial Investment'
          identifier='initialInvestment'
          valueHandling={onchange}
          valueIdentifier={objectStateValue.initialInvestment}
        />
        <LabelSection
          labelTitle='Annual Investment'
          identifier='annualInvestment'
          valueHandling={onchange}
          valueIdentifier={objectStateValue.annualInvestment}
        />
      </div>
      <div className='input-group'>
        <LabelSection
          labelTitle='Expected Return'
          identifier='expectedReturn'
          valueHandling={onchange}
          valueIdentifier={objectStateValue.expectedReturn}
        />
        <LabelSection
          labelTitle='Duration'
          identifier='duration'
          valueHandling={onchange}
          valueIdentifier={objectStateValue.duration}
        />
      </div>
    </div>
  );
}

export default UserInputs;
