import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Row, Col } from 'react-bootstrap';

// import { useState, useEffect } from "react";
// import { Container, Row, Col, Button, Form } from "react-bootstrap";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import Grid from "@mui/material/Grid";
// import DeleteIcon from "@mui/icons-material/Delete";
// import Swal from "sweetalert2";
// import TableCell from "@mui/material/TableCell";
// import { CardActionArea } from "@mui/material";
// import { db } from "../firebaseConfig/Firebase.js";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
// import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function SearchResult({ location }) {
  // Access the passed data from location.state

  // console.log(filteredData);
  // window.location.reload();
  const data = location.state?.data;

  return (
    <div>
      <h1>Search Result</h1>
      <div style={{ width: '300px', height: '200px',  objectFit: 'cover' }}>
      <Card className="user-card"  >
        <Card.Img variant="top" src="https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg" />
        <Card.Body>
          {/* <Card.Title>{user.name}</Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.category}</Card.Text> */}
          <Card.Text>Name</Card.Text>
        </Card.Body>
      </Card>

      </div>
     


      </div>



    
  );
}
