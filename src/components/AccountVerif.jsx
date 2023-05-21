import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import CancelIcon from '@mui/icons-material/Cancel';
import { db,auth } from "../firebaseConfig/Firebase.js";
import { Link } from "@mui/material"; 
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AccountVerif() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const empCollectionRef = collection(db, "VerifyCompany");
  const RegCollectionRef = collection(db, "RegisterationForms");
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const data = await getDocs(empCollectionRef);
      // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const allRows = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setRows(allRows);
      setIsLoading(false);
    } catch {
      alert("error");
      setIsLoading(false);
    }
  };

  //pagination
  const displayedRows = rows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
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
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "VerifyComapny", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    setRows([]);
    getUsers();
  };

  const AcceptUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept it!",
    }).then((result) => {
      if (result.value) {
        submit(id);
      }
    });
  };
  const submit = (id) => {
    const userDocRef = doc(db, "VerifyCompany", id);
    const registrationDocRef = doc(db, "RegisterationForms", id);
  
    // Fetch user data from Firebase
    const getUserData = async () => {
      try {
        const userSnapshot = await getDocs(userDocRef);
        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
  
          // Extract required fields from userData
          const email = userData.email;
          const password = userData.password;
          const accountType = userData.accountType;
          const companyName = userData.companyName;
          const businessDescription = userData.businessDescription;
          const websiteLink = userData.websiteLink;
          const phone = userData.phone;
          const logo = userData.logo;
          const city = userData.city;
          const address = userData.address;
  
          // Call submitUser function with the extracted data
          submitUser(email, password, accountType, companyName, businessDescription, websiteLink, phone, logo, city, address);
        } else {
          console.log("User data not found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
  
    getUserData(); // Call the getUserData function to fetch user data
  
    const submitUser = async (email, password, accountType, companyName, businessDescription, websiteLink, phone, logo, city, address) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("registered with:", user.email);
  
          setDoc(registrationDocRef, {
            Email: email,
            AccountType: accountType,
            UserRole: "Seller",
            CompanyName: companyName,
            BusinessDescription: businessDescription,
            WebsiteLink: websiteLink,
            Phone: phone,
            Logo: logo,
            City: city,
            Address: address,
          })
            .then((res) => {
              alert("Congratulations! You are successfully registered.");
            })
            .catch(() => alert("Check your internet connection"));
        })
        .catch((error) => {
          alert(error.message);
        });
    };
  };
  

  return (
    <>
      {isLoading ? (
        // <div>Loading...</div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
             Account Verification
          </Typography>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Logo
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    CompanyName
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Email
                  </TableCell>

                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Website Link
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Phone Number
                  </TableCell>
                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Account Type
                  </TableCell>

                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1}>
                        <TableCell key={row.id} align="left">
                        <img
                            src={row.Logo}
                            alt="Profile"
                            style={{ borderRadius: '50%', width: '30px', height: '30px' }}
    />

                        </TableCell>
                        
                        <TableCell key={row.id} align="left">
                          {row.CompanyName}
                        </TableCell>

                        <TableCell key={row.id} align="left">
                          {row.Email}
                        </TableCell>

                        <TableCell key={row.id} align="left" cursor="pointer">
                          <Link href={row.WebsiteLink} target="_blank">{row.WebsiteLink}</Link>
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.Phone}
                        </TableCell>

                        <TableCell key={row.id} align="left">
                          {row.AccountType}
                        </TableCell>
                        <TableCell align="left">

                           
                           <div style={{display:"flex", justifyContent:"space-between",paddingRight:"50px"}}>
                            
                           <SpellcheckIcon
                            style={{
                                fontSize: "25px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                AcceptUser(row.id);
                              }}
                            />
                            
                            <CancelIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                            onClick={() => {
                              deleteUser(row.id);
                            }}
                          />


                           </div>
                          
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
}
