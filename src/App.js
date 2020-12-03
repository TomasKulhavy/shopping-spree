import './App.css';
import React, {useState} from 'react';
import { Container } from "reactstrap";
import AddItem from "./components/AddItem";
import List from "./components/List";
import NavigationBar from "./components/NavigationBar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);
  const count = list.length;
  return (
    <div className="App">
      <NavigationBar count={count} />
      <Container>
        <AddItem list={list} setList={setList}/>
        <List list={list}/>
      </Container>
    </div>
  );
}

export default App;
