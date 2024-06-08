import React from 'react';
import CitySelect from './components/CitySelect';
import Calculator from './components/Calculator';
import NumberSystemConverter from './components/NumberSystemConverter';
import AgeInSeconds from './components/AgeInSeconds';
import NumberList from './components/NumberList';

function App() {
  return (
    <div>
      <h1>Мои формы</h1>
      <CitySelect />
      <Calculator />
      <NumberSystemConverter />
      <AgeInSeconds />
      <NumberList />
    </div>
  );
}

export default App;
