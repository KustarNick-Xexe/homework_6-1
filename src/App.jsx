import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import Clock from "./components/Clock";
import AddField from './components/AddFiled';

const App = () => {
  const [data, setData] = useState({ city: '', time: null });

  const handleFormSubmit = (city, zone) => {
    const now = new Date();
    const timezoneOffsetInMinutes = -Number(zone) * 60;
    const dateTimezoneOffset = new Date(now.setUTCHours(now.getUTCHours() + timezoneOffsetInMinutes / 60));
    setData({ city: city, time: dateTimezoneOffset });
    alert(data.city + ' ' + data.time);
  }

  return (
    <div>
      <AddField onFormSubmit={ handleFormSubmit }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));