import React, { useState } from 'react';

const NumberSystemConverter = () => {
  const [number, setNumber] = useState('');
  const [system, setSystem] = useState(10);
  const [convertedNumber, setConvertedNumber] = useState('');

  const handleConversion = () => {
    setConvertedNumber(parseInt(number, system).toString(2));
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <select value={system} onChange={(e) => setSystem(Number(e.target.value))}>
        <option value={2}>Binary (2)</option>
        <option value={10}>Decimal (10)</option>
        <option value={16}>Hexadecimal (16)</option>
      </select>
      <button onClick={handleConversion}>Convert</button>
      <p>{number} in base {system} is {convertedNumber}</p>
    </div>
  );
};

export default NumberSystemConverter;