import './App.css';
import React, { useState } from 'react';
import { Container } from "reactstrap";
import AddItem from "./components/AddItem";
import List from "./components/List";
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);
  const count = list.length;
  const textColor = "";

  const addItem = (v) => {
    setList([...list, v])
  }

  const removeItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

  const checkItem = (index) => {
    textColor = "success"
  }

  return (
    <div className="App">
      <NavigationBar count={count} />
      <Container>
        <AddItem addItem={addItem} />
        <List removeItem={removeItem} checkItem={checkItem} value={list} />
      </Container>
    </div>
  );
}

export default App;
