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
<<<<<<< HEAD
  const textColor = "";
=======
>>>>>>> d4ebeb0160a51bf168e909abc56e74a8e2564c38

  const addItem = (v) => {
    setList([...list, v])
  }

  const removeItem = (index) => {
    list.splice(index, 1)
    setList([...list])
  }

<<<<<<< HEAD
  const checkItem = (index) => {
    textColor = "success"
  }

=======
>>>>>>> d4ebeb0160a51bf168e909abc56e74a8e2564c38
  return (
    <div className="App">
      <NavigationBar count={count} />
      <Container>
        <AddItem addItem={addItem} />
<<<<<<< HEAD
        <List removeItem={removeItem} checkItem={checkItem} value={list} />
=======
        <List removeItem={removeItem} value={list} />
>>>>>>> d4ebeb0160a51bf168e909abc56e74a8e2564c38
      </Container>
    </div>
  );
}

export default App;
