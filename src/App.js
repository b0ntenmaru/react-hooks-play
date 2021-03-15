import React, { useState } from 'react';

const App = props => {
  const [state, setState] = useState(props);
  
  return (
    <React.Fragment>
      <p>現在の、{state.name}は{state.price}です</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={() => setState(props)}>reset</button>
      <input value={state.name} onChange={e => setState({...state, name: e.target.value})} />
    </React.Fragment>
  );
};

App.defaultProps = {
  name: '',
  price: 1000,
}

export default App;
