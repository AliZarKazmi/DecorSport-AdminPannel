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
import { db } from "../firebaseConfig/Firebase.js";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import { Link } from "@mui/material";

export default function AddPractice() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const queryCollectionRef = collection(db, "Queries");

  useEffect(() => {
    getQueries();
  }, []);

  const getQueries = async () => {
    setIsLoading(true);
    try {
      const data = await getDocs(queryCollectionRef);
      setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setIsLoading(false);
    } catch {
      alert("error");
      setIsLoading(false);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const userInfo = (id) => {
    console.log("User Id is: " + id);
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
            Queries
          </Typography>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Email
                  </TableCell>

                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
                    Description
                  </TableCell>

                  <TableCell align={"left"} style={{ minWidth: "100px" }}>
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
                        <TableCell key={row.id} align="left">
                          {row.Email}
                        </TableCell>

                        <TableCell
                          key={row.id}
                          align="left"
                          multiline
                          maxRows={4}
                        >
                          {row.QueryDescription}
                        </TableCell>

                        <TableCell align="left">
                          <Link
                            href={`/response/${row.Email}/${row.QueryDescription}`}
                          >
                            <EditIcon
                              style={{
                                fontSize: "25px",
                                color: "blue",
                                cursor: "pointer",
                              }}
                            />
                          </Link>
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
