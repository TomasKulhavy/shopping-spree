import './App.css';
import React, {useState} from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand, Container } from "reactstrap";
import AddItem from "./components/AddItem";
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([]);
  const count = list.length;
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shopping Spree</NavbarBrand>
        <Nav>
          <NavItem>
            <NavLink href="/">Items {count}</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Container>
        <AddItem setList={setList}/>
        <List list={list}/>
      </Container>
    </div>
  );
}

export default App;
