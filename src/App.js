import React from 'react';
import './App.css';

import { FormInputItem } from './components/FormInputItem';
import { FormTextAreaItem } from './components/FormTextAreaItem';
import { Button } from './components/Button';

function App() {
  return (
    <div className="form-style-8">
      <h2>FEEDBACK FORM</h2>
      <form>
        <FormInputItem name="name" placeholder="Full Name" />
        <FormInputItem name="email" placeholder="Email" />
        <FormTextAreaItem placeholder="Message" />
        <Button type="submit" />
      </form>
    </div>
  );
}

export default App;
