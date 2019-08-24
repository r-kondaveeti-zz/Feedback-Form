import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import { Main } from './Main';
import { Second } from './Second';

function App() {
  return (
    <div className="form-style-8">
    <Router>
      <Route  exact path="/" component={Main} />
      <Route  exact path="/AllUsers" render={(props) => <Second values={[
        {
          id: 1,
          name: 'Radhithya Reddy',
          email: 'radhithya.kondaveeti@yash.com',
          feedback: 'First react project!'
        },
        {
          id: 2,
          name: 'Latha Kondaveeti',
          email: 'latha@kondaveeti@gmail.com',
          feedback: 'Radhithya is the greatest son in the world'
        }
      ]} /> } />
    </Router>
    </div>
  );
}

export default App;
