import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './style.module.css';

function App() {
  const [arrCurrencies, setArrCurrencies] = useState([]);
  const [activeCurrency, setActiveCurrency] = useState('Select Occupation');
  const [flag, setFlage] = useState(true);

  async function getCurrencies() {
    const response = await axios.get('https://www.nbrb.by/API/ExRates/Currencies')
    setArrCurrencies(response.data);
  }

  function getActiveCurrency(e) {
    setActiveCurrency(e.target.textContent);
    if (true) {
      setFlage(!flag);
    }
  }

  useEffect(() => {
    getCurrencies();
  }, [])
  return (
    <>
      <div onClick={() => setFlage(!flag)} className={style.wrapper}>
        <p>{activeCurrency}</p>
        <div className={style.img}></div>
      </div>

      {flag ?
        <div className={style.list}>
          <div>
            {arrCurrencies.map((el) => <p onClick={getActiveCurrency}>{el.Cur_Name}</p>)}
          </div>
        </div> : null}
    </>
  );
}

export default App;
