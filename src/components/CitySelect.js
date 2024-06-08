import React from 'react';

const CitySelect = () => {
  const handleCityChange = (e) => {
    if (e.target.value !== 'Рио') {
      alert('Нет, это не Рио-де-Жанейро!');
    }
  };

  return (
    <div>
      <select onChange={handleCityChange}>
        <option value="Рио">Рио-де-Жанейро</option>
        <option value="Париж">Париж</option>
        <option value="Лондон">Лондон</option>
      </select>
    </div>
  );
};

export default CitySelect;