import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Button,Grid,Row, Col, ButtonToolbar, Jumbotron, Table } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Bootstrap</h1>
        </header>
          <h2>Grid System</h2>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                One
              </Col>
              <Col xs={6} md={4}>
               Two
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} md={4}>
                three
              </Col>
              <Col xs={6} md={4}>
                four
              </Col>
              <Col xsHidden md={4}>
                five
              </Col>
            </Row>

            <Row className="show-grid">
              <Col xs={6} xsOffset={6}>
                six
              </Col>
            </Row>

            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                seven
              </Col>
              <Col md={6} mdPull={6}>
                eight
              </Col>
            </Row>
          </Grid>
          <h2>Buttons</h2>
          <ButtonToolbar>
             <Button>Default</Button>
             <Button bsStyle="primary">Primary</Button>
             <Button bsStyle="success">Success</Button>
          </ButtonToolbar>
          <h2>JumboTron</h2>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>
          <h2>Table</h2>
          <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
