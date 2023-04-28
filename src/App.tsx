import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Input from './components/Input';
import ChangeColor from './components/ChangeColor';
import ParentProps from './components/ParentProps';
import Todo from './components/Todo';
import Header from './components/Header';
import Section from './components/Section';
import Tail from './Tail';

function App() {
  return (
    <div className="App">
      {/* <Counter  />
      <Input  /> */}
      {/* <ChangeColor  /> */}
      {/* <ParentProps  /> */}
      {/* <Todo /> */}
      {/* <Header />
      <Section color='blue' /> */}
      <Tail />
    </div>
  );
}

export default App;
