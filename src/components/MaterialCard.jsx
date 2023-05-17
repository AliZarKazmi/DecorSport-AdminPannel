import * as React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import "./MaterialCard.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TableCell from "@mui/material/TableCell";
import { CardActionArea } from "@mui/material";
import { db } from "../firebaseConfig/Firebase.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

export default function MaterialCard() {
  const [cardData, setcardData] = useState([]);
  const [ideaCardData, setIdeaCardData] = useState([]);
  const productCollectionRef = collection(db, "ProductList");
  const ideaCollectionRef = collection(db, "IdeasList");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProducts();
    getIdeas();
  }, []);

  //Retriving data from Firebase for Products 
  const getProducts = async () => {
    setIsLoading(true);
    try {
      const data = await getDocs(productCollectionRef);
      setcardData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    } catch {
      alert("error");
      setIsLoading(false);
    }
  };
  //Retriving data from Firebase for Ideas 
  const getIdeas = async () => {
    const data = await getDocs(ideaCollectionRef);
    setIdeaCardData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //Warning Message for Sepcifc Product Deletion
  const deleteProductId = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteProductPost(id);
      }
    });
  };

  // Delete the Sepcific Product
  const deleteProductPost = async (id) => {
    const userDoc = doc(db, "ProductList", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Post has been deleted.", "success");
    setIdeaCardData([]);
    getIdeas();
  };

  //Warning Message for Sepcifc Idea Deletion
  const deleteIdeaId = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteIdeaPost(id);
      }
    });
  };

  // Delete the Sepcific Idea
  const deleteIdeaPost = async (id) => {
    const userDoc = doc(db, "IdeasList", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Post has been deleted.", "success");
    setcardData([]);
    getProducts();
  };

  return (
    <>
      {/* Loading Bar */}
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          {/* Material Ui Build-in */}
          <CircularProgress /> 

        </Box>
      ) : (
        <Row>
          <Col xs={12} md={5}>
            <div className="displayCard">
              <Typography
                variant="h5"
                component="div"
                sx={{ padding: "20px", marginLeft: "30px" }}
              >
                Products
              </Typography>

              {cardData.map((data) => {
                return (
                  <div className="card" key={data.id}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        Height="50%"
                        width="100%"
                        image={data.Image_1}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          {data.ProductName}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          Comapany Name : {data.Manufacturer}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Category : {data.Category}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Sub-Category : {data.SubCategory}
                        </Typography>
                        <Typography variant="body3" color="text.secondary">
                          Publish-By : {data.UploadedBy}
                        </Typography>
                      </CardContent>

                      <DeleteIcon
                        style={{
                          fontSize: "35px",
                          color: "darkred",
                          cursor: "pointer",
                          justifyContent: "center",
                        }}
                        onClick={() => {
                          // alert("Message Deleted");
                          deleteProductId(data.id);
                        }}
                      />
                    </CardActionArea>
                  </div>
                );
              })}
            </div>
          </Col>
          <Col xs={12} md={5}>
            <Typography
              variant="h5"
              component="div"
              sx={{ padding: "20px", marginLeft: "50px" }}
            >
              Ideas
            </Typography>

            {ideaCardData.map((data) => {
              return (
                <div className="card" key={data.id}>
                  <CardActionArea style={{ width: '100%', height: 'auto', position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="auto"
                      width="100%"
                      image={data.Image_1}
                      alt="green iguana"
                      position="absolute"
                      top="50%"
                      transform='translateY(-50%)'
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div">
                        {data.ProductName}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Comapany Name : {data.Manufacturer}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Category : {data.Category}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sub-Category : {data.SubCategory}
                      </Typography>
                      <Typography variant="body3" color="text.secondary">
                        Publish-By : {data.UploadedBy}
                      </Typography>
                    </CardContent>

                    <DeleteIcon
                      style={{
                        fontSize: "35px",
                        color: "darkred",
                        cursor: "pointer",
                        justifyContent: "center",
                      }}
                      onClick={() => {
                        // alert("Message Deleted");
                        deleteIdeaId(data.id);
                      }}
                    />
                  </CardActionArea>
                </div>
              );
            })}
          </Col>
        </Row>
      )}
    </>
  );
}
