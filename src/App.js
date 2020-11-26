import './App.css';
import { Navbar, InputGroup, ListGroup, ListGroupItem, NavbarBrand, Nav, Input, InputGroupAddon, Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shopping Spree</NavbarBrand>
      </Navbar>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="success"></Button>
        </InputGroupAddon>
      </InputGroup>
      <ListGroup>
        <ListGroupItem></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default App;
