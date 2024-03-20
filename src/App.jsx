import Header from "./components/Header";
import UserInputs from "./components/UserInputs";
import { useState } from "react";
import Results from "./components/results";

function App() {

  const [objectStateValue, newObjectStateValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 20,
    expectedReturn: 15000,
    duration: 4
  });

  function handleValue(inputIdentifier, newValue) {
    // Parse the input value to float
    const parsedValue = parseFloat(newValue);
  
    // Check if the parsed value is a valid number
    if (!isNaN(parsedValue)) {
      newObjectStateValue(prevUserInput => {
        return {
          ...prevUserInput,
          [inputIdentifier]: parsedValue
        };
      });
    }
  }
  
  
  
  
  //adding a plus sign infront of newValue with force the newValue function to become a string
  console.log("objectStateValue in App component:", objectStateValue);

  return (
    <div>
      <Header />
      <UserInputs onchange={handleValue} objectStateValue={objectStateValue} />
      <Results objectStateValue={objectStateValue}/>
    </div>
  );
}

export default App;
