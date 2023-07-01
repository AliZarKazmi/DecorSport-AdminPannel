import * as React from "react";
import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Link } from "@mui/material";
import { db } from "../firebaseConfig/Firebase.js";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function MaterialTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const empCollectionRef = collection(db, "RegisterationForms");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const data = await getDocs(empCollectionRef);
      const allRows = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setRows(allRows);
      setIsLoading(false);
    } catch {
      alert("error");
      setIsLoading(false);
    }
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
    Swal.fire("Deleted!", "Account has been deleted.", "success");
    setRows([]);
    getUsers();
  };

  return (
    <>
      {isLoading ? (
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
            Account Profiles
          </Typography>
          <div style={{ height: 390, overflow: "auto" }}>
            <TableContainer>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Images
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      CompanyName
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Email
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Website Link
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Phone Number
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Account Type
                    </TableCell>
                    <TableCell align="left" style={{ minWidth: "100px" }}>
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    if (row.AccountType === "User") {
                      // Exclude rows with AccountType of "User"
                      return null;
                    }
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                        <TableCell align="left">
                          <img
                            src={row.Logo}
                            alt="Profile"
                            style={{
                              borderRadius: "50%",
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        </TableCell>
                        <TableCell align="left">{row.CompanyName}</TableCell>
                        <TableCell align="left">{row.Email}</TableCell>
                        <TableCell align="left" cursor="pointer">
                          <Link href={row.WebsiteLink} target="_blank">
                            {row.WebsiteLink}
                          </Link>
                        </TableCell>
                        <TableCell align="left">{row.Phone}</TableCell>
                        <TableCell align="left">{row.AccountType}</TableCell>
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
          </div>
        </Paper>
      )}
    </>
  );
}
