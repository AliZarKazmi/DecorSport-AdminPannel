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
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function MaterialCard() {
  const [cardData, setcardData] = useState([]);
  const [ideaCardData, setIdeaCardData] = useState([]);
  const empCollectionRef = collection(db, "ProductList");
  const ideaCollectionRef = collection(db, "IdeasList");

  useEffect(() => {
    getUsers();
    getIdeas();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setcardData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const getIdeas = async () => {
    const data = await getDocs(ideaCollectionRef);
    setIdeaCardData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };


//For Product Post
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

  const deleteProductPost = async (id) => {
    const userDoc = doc(db, "ProductList", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Post has been deleted.", "success");
    setIdeaCardData([])
    getIdeas();
  };


//For Idea Post
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

const deleteIdeaPost = async (id) => {
  const userDoc = doc(db, "IdeasList", id);
  await deleteDoc(userDoc);
  Swal.fire("Deleted!", "Post has been deleted.", "success");
  setcardData([])
  getUsers();
};


  return (
    <Row>
      {/* <Typography
        // gutterBottom
        variant="h5"
        component="div"
        sx={{ padding: "20px" }}
      >
        Products/Services
      </Typography> */}

      <Col xs={12} md={5}>
        <div className="displayCard">
          <Typography
            // gutterBottom
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
                    height="200%"
                    //   image="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
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
          // gutterBottom
          variant="h5"
          component="div"
          sx={{ padding: "20px", marginLeft: "50px" }}
        >
          Ideas
        </Typography>

        {ideaCardData.map((data) => {
          return (
            <div className="card" key={data.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200%"
                  //   image="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
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
                      // deleteIdeaId(data.id);
                    }}
                  />
              </CardActionArea>
            </div>
          );
        })}
      </Col>
    </Row>
  );
}

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <Typography
//         // gutterBottom
//         variant="h5"
//         component="div"
//         sx={{ padding: "20px" }}
//       >
//         Products/Services
//       </Typography>
//       {cardData.map((data) => {
//         return (
//           <Grid container spacing={2}>
//             <Grid itemxs={6}>
//               <div sty={{ margin: 20 }} key={data.id}>
//                 <CardActionArea>
//                   <CardMedia
//                     component="img"
//                     height="200%"
//                     //   image="https://my.alfred.edu/zoom/_images/foster-lake.jpg"
//                     image={data.Image_1}
//                     alt="green iguana"
//                   />
//                   <CardContent>
//                     <Typography gutterBottom variant="h6" component="div">
//                       {data.ProductName}
//                     </Typography>
//                     <Typography variant="body1" color="text.secondary">
//                       Comapany Name : {data.Manufacturer}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Category : {data.Category}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       Sub-Category : {data.SubCategory}
//                     </Typography>
//                     <Typography variant="body3" color="text.secondary">
//                       Publish-By : {data.UploadedBy}
//                     </Typography>
//                   </CardContent>
//                 </CardActionArea>

//               </div>
//             </Grid>
//           </Grid>
//         );
//       })}
//     </Card>
//   );
// }
