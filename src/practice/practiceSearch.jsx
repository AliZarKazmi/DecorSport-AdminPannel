import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function Sidebar() {
  return (
    <div className="sidebar" style={{margin:"20px", backgroundColor:"grey"}}>
      <Form>
        <Form.Group>
          <Form.Label>Filter by Category</Form.Label>
          <Form.Control as="select">
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Filter by Date</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Apply Filters
        </Button>
      </Form>
    </div>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Welcome to my website!</h1>
            <p>This is some sample text.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function Searchbar() {
  return (
    <div className="App" style={{margin:"20px", backgroundColor:"grey"}}>
      <Sidebar/>      
      
  {/* ------------------------------ */}
      {/* <Row> */}
        {/* <Col xs={12} md={4}> */}
          {/* <Sidebar /> */}
        {/* </Col> */}
        {/* <Col xs={12} md={8}> */}
          {/* <MainContent /> */}
        {/* </Col> */}
      {/* </Row> */}

{/* ------------------------------ */}
    </div>
  );
}

export default Searchbar;
