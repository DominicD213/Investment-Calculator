import React from 'react'

export const LabelSection = ({labelTitle,idenifier,valueHandeling,valueIdenifier}) => {
  return (
    <div>
        <p>
            <label>{labelTitle}</label>
            <input type='number' required value={valueIdenifier} onChange={(event) => 
                valueHandeling(idenifier,event.target.value)}></input>
        </p>
    </div>
  )
}

export default LabelSection