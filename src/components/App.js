import React, { useReducer } from 'react';
import EventForm from './EventForm';
import Events from './Events';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  
  return (
    <div className="container-fluid">
      <EventForm dispatch={dispatch} state={state} />

      <Events dispatch={dispatch} state={state} />
    </div>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
