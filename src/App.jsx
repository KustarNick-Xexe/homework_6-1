import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../main.css';
import Clock from "./components/Clock";
import AddField from './components/AddFiled';
import moment from 'moment/moment';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const [clocks, setClocks] = useState([]);

  const handleFormSubmit = (city, zone) => {
    const dateTimezoneOffset = moment()
      .subtract(moment().parseZone().utcOffset(), "minutes")
      .add(Number(zone), "hours");
    
    const newClock = { id: uuidv4(), city: city, time: dateTimezoneOffset };
    setClocks(prevState => [ ...prevState, newClock ]);
  };

  const handleDelete = (id) => {
    setClocks(prevState => prevState.filter(clock => clock.id !== id));
  };

  return (
    <div className=''>
      { console.log('отрисовалось')}
      <AddField onFormSubmit={ handleFormSubmit }/>
      {clocks.map(clock => (
          <Clock key={ clock.id } id={ clock.id } city={ clock.city } zone={ clock.time } onDelete={ () => handleDelete(clock.id) } />
        ))}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));