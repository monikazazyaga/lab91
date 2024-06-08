import React, { useState } from 'react';

const NumberList = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [filter, setFilter] = useState('All');
  const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);
  const filteredNumbers = numbers.filter(num => {
    if (filter === 'All') return true;
    if (filter === 'Even' && num % 2 === 0) return true;
    if (filter === 'Odd' && num % 2 !== 0) return true;
    return false;
  });

  const handleAddNumber = () => {
    setNumbers([...numbers, parseInt(inputNumber)]);
    setInputNumber('');
  };

  return (
    <div>
      <input type="text" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)} />
      <button onClick={handleAddNumber}>+</button>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Even">Even</option>
        <option value="Odd">Odd</option>
      </select>
      <ul>
        {filteredNumbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumberList;
