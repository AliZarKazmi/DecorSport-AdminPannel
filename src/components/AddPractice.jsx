import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
import { db } from "../firebaseConfig/Firebase.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import EditFormPractice from './EditFormPractice.jsx';
import { Link } from '@mui/material';
import { Button } from 'react-bootstrap';

export default function AddPractice() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  const empCollectionRef = collection(db, "Queries");

  useEffect(() => {
    getUsers();
  }, []);
  
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };



  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const userInfo = (id) => {
    console.log("User Id is: "+id)

    
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.value) {
    //     deleteApi(id);
    //   }
    // });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "Queries", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    setRows([])
    getUsers();
  };


  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
         <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ padding: "20px" }}
          >
            Queries
          </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Email
                </TableCell>
                
                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Description
                </TableCell>

                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Action
                </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                   
              
                        <TableCell key={row.id} align="left" >
                          {row.Email}
                        </TableCell>

                        <TableCell key={row.id} align="left"  multiline
                maxRows={4}>
                          {row.QueryDescription}
                        </TableCell>
                        
                        <TableCell align="left">
                          
                            


                            <Link href={`/response/${row.Email}/${row.QueryDescription}`}>
                            {/* <Button>
                                Response
                            </Button> */}
                            <EditIcon
                              style={{
                                fontSize: "25px",
                                color: "blue",
                                cursor: "pointer",
                              }}/>
                            </Link>
                            
                            {/* <EditIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                <Link to = {`/response/_${row.id}`}></Link>
                                userInfo(row.id);
                              }}
                            /> */}
                          
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
  );
}