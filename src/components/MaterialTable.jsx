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
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


export default function MaterialTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);

  const empCollectionRef = collection(db, "RegisterationForms");

  useEffect(() => {
    getUsers();
  },[]);
  
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    // setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    const allRows = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setRows(allRows);
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
    const userDoc = doc(db, "RegisterationForms", id);
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
            Account Profiles
          </Typography>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                {/* <TableCell              
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Img
                </TableCell>
                 */}
                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    CompanyName
                </TableCell>
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
                    Website Link
                </TableCell>
                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Phone Number
                </TableCell>
                <TableCell
                  
                  align={'left'}
                  style={{ minWidth: '100px' }}
                >
                    Account Type
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
            {displayedRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1}>
                   
                   {/* <TableCell key={row.id} align="left">
                          url = <source {row.Logo}/>
                        </TableCell> */}

                        <TableCell key={row.id} align="left">
                          {row.CompanyName}
                        </TableCell>

                        <TableCell key={row.id} align="left">
                          {row.Email}
                        </TableCell>
                        
                        <TableCell key={row.id} align="left">
                          {row.WebsiteLink}
                        </TableCell>
                        <TableCell key={row.id} align="left">
                          {row.Phone}
                        </TableCell>

                        <TableCell key={row.id} align="left">
                          {row.AccountType}
                        </TableCell>
                        <TableCell align="left">
                          
                            
                            <DeleteIcon
                              style={{
                                fontSize: "20px",
                                color: "darkred",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          
                        </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}

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