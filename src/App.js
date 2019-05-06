import React, { Component } from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Nav from 'react-bootstrap/Nav'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from './Home';
import Users from './Users';
import Tweets from './Tweets';
import Contact from './Contact';

class App extends Component {
    render() {
        return (
            <Router>

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Twitter</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                            <Nav.Link href="/tweets">Tweets</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>

                <div className="App">
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={Users} />
                    <Route path='/tweets' component={Tweets} />
                    <Route path='/contact' component={Contact} />
                </div>
            </Router>
        )
    }
}

export default App