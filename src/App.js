import React from 'react';
import './App.css';
import Title from './components/Title';
import FormSalario from './components/FormSalario';

function App() {
  return (
    <>
      <Title />
      <FormSalario>{{label: "Salário Bruto", type:"number"}}</FormSalario>
    </>
  );
}

export default App;
