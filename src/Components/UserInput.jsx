export default function InputFields({ onChange, userInput }) {
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
              onChange("initialInvestment", event.target.value)
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
              onChange("annualInvestment", event.target.value)
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
            onChange={(event) => onChange("expectedReturn", event.target.value)}
            id="expectedReturn"
          />
        </div>
        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
            required
            id="duration"
          />
        </div>
      </div>
    </div>
  );
}
