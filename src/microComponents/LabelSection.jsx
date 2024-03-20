import React from 'react';

const LabelSection = ({ labelTitle, identifier, valueHandling, valueIdentifier }) => {
  console.log("valueIdentifier in LabelSection component:", valueIdentifier);
  return (
    <div>
      <p>
        <label>{labelTitle}</label>
        <input
          type='number'
          required
          value={valueIdentifier}
          onChange={(event) => {
            console.log("Input value:", event.target.value);
            valueHandling(identifier, event.target.value);
          }}
        />
      </p>
    </div>
  );
}

export default LabelSection;
