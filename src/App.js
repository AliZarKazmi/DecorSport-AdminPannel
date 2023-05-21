// import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp"
import CardComp from "./practice/CardComp"
import Searchbar from "./components/Searchbar"
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import MaterialTable from "./components/MaterialTable";
import MaterialMenu from "./components/MaterialMenu";
import MaterialCard from "./components/MaterialCard";
// import MaterialQueries from "./components/MaterialQueries";
import AddPractice from "./components/AddPractice";
import EditFormPractice from "./components/EditFormPractice";
import AccountVerif from "./components/AccountVerif";




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
        <MaterialMenu/>
        
        <Switch>
            

          {/* <Route exact path='/seller-profile' component={UserData}/> */}
          <Route exact path='/seller-profile' component={MaterialTable}/>
          {/* <Route exact path='/deocrator-profile' component={UserData}/> */}
          <Route exact path='/account-verification' component={AccountVerif}/>
          <Route exact path='/product' component={MaterialCard}/>
          <Route exact path='/query' component={AddPractice}/>
          <Route exact path='/' component={CardComp}/>
          <Route exact path='/response/:Email/:QueryDescription' component={EditFormPractice}/>
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
