import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import Clock from "./components/Clock";
import AddField from './components/AddFiled';
import moment from 'moment/moment';

const App = () => {
  const [data, setData] = useState({ city: '', time: null });

  const handleFormSubmit = (city, zone) => {
    const dateTimezoneOffset = moment().utcOffset('+0000').add(Number(zone), 'hours');
    setData({ city: city, time: dateTimezoneOffset });
  };

  return (
    <div>
      <AddField onFormSubmit={ handleFormSubmit }/>
      { data.time && <Clock city={ data.city } zone={ data.time } /> }
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));