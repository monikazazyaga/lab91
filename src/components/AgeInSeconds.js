import React, { useState, useEffect } from 'react';

const AgeInSeconds = () => {
  const [birthdate, setBirthdate] = useState('');
  const [secondsLived, setSecondsLived] = useState(0);

  useEffect(() => {
    const calculateSeconds = () => {
      const birthdateArr = birthdate.split('.');
      if (birthdateArr.length === 3) {
        const birthDate = new Date(`${birthdateArr[2]}/${birthdateArr[1]}/${birthdateArr[0]}`);
        const seconds = Math.floor((new Date() - birthDate) / 1000);
        setSecondsLived(seconds);
      }
    };

    const interval = setInterval(() => {
      calculateSeconds();
    }, 1000);

    return () => clearInterval(interval);
  }, [birthdate]);

  return (
    <div>
      <input type="text" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="дд.мм.гггг" />
      <p>Вы прожили: {secondsLived} секунд.</p>
    </div>
  );
};

export default AgeInSeconds;