import { useState } from "react";

export default function InputFields() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
    console.log(userInput.annualInvestment);
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div className="input-field">
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
            id="initialInvestment"
          />
        </div>
        <div className="input-field">
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
            id="annualInvestment"
          />
        </div>
      </div>

      <div className="input-group">
        <div className="input-field">
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
            id="expectedReturn"
          />
        </div>
        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
            required
            id="duration"
          />
        </div>
      </div>
    </div>
  );
}
