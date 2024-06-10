import React, { useState } from 'react';

const IVDripRateCalculator = () => {
  const [weight, setWeight] = useState('');
  const [rate, setRate] = useState('');
  const [factor, setFactor] = useState('');
  const [dripRate, setDripRate] = useState('');
  const [error, setError] = useState('');

  const calculateDripRate = () => {
    setError('');

    if (!weight || !rate || !factor) {
      setError('Please fill in all fields.');
      return;
    }

    const calculatedDripRate = (parseFloat(weight) * parseFloat(rate)) / parseFloat(factor);

    setDripRate(calculatedDripRate.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>IV Drip Rate Calculator</h2>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Patient Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Medication Infusion Rate (mL/hr):</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
      </div>
      <div>
        <label>Drip Factor (drops/mL):</label>
        <input
          type="number"
          value={factor}
          onChange={(e) => setFactor(e.target.value)}
        />
      </div>
      <button onClick={calculateDripRate}>Calculate</button>
      {dripRate && <div className="result">Drip Rate: {dripRate} drops/min</div>}
    </div>
  );
};

export default IVDripRateCalculator;
