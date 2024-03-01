import React from 'react'
import LabelSection from '../microComponents/LabelSection'
import { useState } from 'react'

const UserInputs = () => {
    const [objectStateValue, newObjectStateValue] = useState({
        initialInvestment: 100,
        annualInvestment : 20,
        expectedReturn: 5,
        duration:4
    })

    function handleValue(inputIdenifier, newValue){
        newObjectStateValue(prevUserInput =>{
           return{
            ...prevUserInput, [inputIdenifier]:newValue,
          }
        });
   }

  return (
    <div id ='user-input'>
            <div className='input-group'>
                <LabelSection labelTitle = 'Initial Investment' 
                    stateValue={newObjectStateValue} idenifier={'initialInvestment'} 
                    valueHandeling={handleValue} valueIdenifier={UserInputs.initialInvestment}/>
                <LabelSection labelTitle = 'Annual Investment' 
                    stateValue={newObjectStateValue} idenifier={'annualInvestment'} 
                    valueHandeling={handleValue} valueIdenifier={UserInputs.annualInvestment}/>
            </div>
            <div className='input-group'>
                <LabelSection labelTitle = 'Expected Return' 
                    stateValue={newObjectStateValue} idenifier={'expectedReturn'} 
                    valueHandeling={handleValue} valueIdenifier={UserInputs.expectedReturn}/>
                <LabelSection labelTitle = 'Duration' 
                    stateValue={newObjectStateValue} idenifier={'duration'} 
                    valueHandeling={handleValue} valueIdenifier={UserInputs.duration}/>
            </div>
    </div>
  )
}

export default UserInputs