import './App.css';
import { Navbar, ListGroup, ListGroupItem, NavbarBrand, Container } from 'reactstrap';
import Add from "./components/AddItem";
import List from "./components/AddItem";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Shopping Spree</NavbarBrand>
      </Navbar>
      <Container>
        <Add />
        <List />
      </Container>
    </div>
  );
}

export default App;
