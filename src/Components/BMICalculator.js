import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState('');
  const [error, setError] = useState('');

  const calculateBMI = () => {
    setError('');

    if (!height || !weight) {
      setError('Please fill in all fields.');
      return;
    }

    const heightMeters = parseFloat(height) / 100; // Convert height to meters
    const calculatedBMI = parseFloat(weight) / (heightMeters * heightMeters);

    setBMI(calculatedBMI.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>BMI Calculator</h2>
      {error && <div className="error">{error}</div>}
      <div>
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      {bmi && <div className="result">BMI: {bmi}</div>}
    </div>
  );
};

export default BMICalculator;
