import styles from './Navbar.module.css'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">My Galleries</Nav.Link>
        <Nav.Link href="#features">About Me</Nav.Link>
        <Nav.Link href="#pricing">Follow Me</Nav.Link>
      </Nav>

      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}