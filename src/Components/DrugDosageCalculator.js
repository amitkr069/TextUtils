import React, { useState } from 'react';

const DrugDosageCalculator = () => {
  const [weight, setWeight] = useState('');
  const [concentration, setConcentration] = useState('');
  const [dosage, setDosage] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const calculateDosage = () => {
    setError('');

    if (!weight || !concentration || !dosage) {
      setError('Please fill in all fields.');
      return;
    }

    const calculatedDosage = (parseFloat(weight) * parseFloat(concentration)) / parseFloat(dosage);
    
    setResult(calculatedDosage.toFixed(2));
  };

  return (
    <div className="calculator">
      <h2>Drug Dosage Calculator</h2>
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
        <label>Medication Concentration (mg/mL):</label>
        <input
          type="number"
          value={concentration}
          onChange={(e) => setConcentration(e.target.value)}
        />
      </div>
      <div>
        <label>Desired Dosage (mg):</label>
        <input
          type="number"
          value={dosage}
          onChange={(e) => setDosage(e.target.value)}
        />
      </div>
      <button onClick={calculateDosage}>Calculate</button>
      {result && <div className="result">The dosage is: {result} mg</div>}
    </div>
  );
};

export default DrugDosageCalculator;
