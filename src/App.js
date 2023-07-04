import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp"
import Searchbar from "./components/Searchbar"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ProfileTable from "./components/ProfileTable";
import MenuBar from "./components/MenuBar";
import PostDisplay from "./components/PostDisplay";
import QuesyDisplay from "./components/QuesyDisplay";
import SendResponse from "./components/SendResponse";
import AccountVerif from "./components/AccountVerif";
import SearchResult from "./components/SearchResult";



function App() {
  return (
    
    <Router >
      <div >
      <NavbarComp/>
      <div >

      <Row >
        <Col xs={12} md={3}  >
          <Searchbar />
        </Col>
        <Col xs={12} md={9} >
        <MenuBar/>
        
        <Switch>
          <Route exact path='/seller-profile' component={ProfileTable}/>
          <Route exact path='/account-verification' component={AccountVerif}/>
          <Route exact path='/product' component={PostDisplay}/>
          <Route exact path='/query' component={QuesyDisplay}/>
          <Route exact path="/searchResult" component={SearchResult}/>
          <Route exact path='/' component={ProfileTable}/>
          <Route exact path='/response/:Email/:QueryDescription/:id' component={SendResponse}/>
      </Switch>
        </Col>
      </Row>
    </div>    
      
      </div>
    </Router>

  );
}

export default App;
