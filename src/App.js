// import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp"
import CardComp from "./practice/CardComp"
import Searchbar from "./components/Searchbar"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import ProfileTable from "./components/ProfileTable";
import MenuBar from "./components/MenuBar";
import PostDisplay from "./components/PostDisplay";
// import MaterialQueries from "./components/MaterialQueries";
import QuesyDisplay from "./components/QuesyDisplay";
import SendResponse from "./components/SendResponse";
import AccountVerif from "./components/AccountVerif";
import SearchResult from "./components/SearchResult";
import Login from "./components/Login";



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
        {/* <Menubar/> */}
        <MenuBar/>
        
        <Switch>
            

          {/* <Route exact path='/seller-profile' component={UserData}/> */}
          <Route exact path='/seller-profile' component={ProfileTable}/>
          {/* <Route exact path='/deocrator-profile' component={UserData}/> */}
          <Route exact path='/account-verification' component={AccountVerif}/>
          <Route exact path='/product' component={PostDisplay}/>
          <Route exact path='/query' component={QuesyDisplay}/>
          <Route exact path="/searchResult" component={SearchResult}/>
          <Route exact path='/' component={ProfileTable}/>
          <Route exact path='/response/:Email/:QueryDescription' component={SendResponse}/>
      </Switch>
        </Col>
      </Row>
    </div>

    {/* <Searchbar/> */}
    
      
      </div>
    </Router>

  );
}

export default App;
