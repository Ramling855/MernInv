import React, { useState, useEffect } from "react";
import axios from "axios";
import PaymentModal from "./PaymentModal";

import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, ),
//   createData("Ice cream sandwich", 237, 9.0)
// ];

export default function Payment() {
  const num = useSelector((state) => state.Data);
  const [rows, setRows] = useState([]);
  const [payment, setPayment] = useState("Pending");
  const [flag, setFlag] = useState(false);


  useEffect(() => {
    axios
      .get("http://localhost:8080/order")
      .then((res) => {
        setRows(res.data);
        setFlag(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [flag]);

  const statusHandler = (e) => {
    console.log(e);
    setPayment("Sucess");
  };

  const tokenData = useSelector((state) => state.Data.token)

  return (
    <div>
      <div>
        <h3
          style={{
            alignItem: "center",
          }}
        >
          Payment Details :
         { `${tokenData.first} ${tokenData.last}`}
        </h3>
        {/* // Product Table */}
        <TableContainer component={Paper} mt={2} ml={3}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> Id</StyledTableCell>
                <StyledTableCell>Cust Name</StyledTableCell>
                {/* <StyledTableCell align="center">Cust Name</StyledTableCell> */}
                <StyledTableCell align="center">Products Name</StyledTableCell>
                <StyledTableCell align="center">Qty</StyledTableCell>
                <StyledTableCell align="center">Price</StyledTableCell>
                <StyledTableCell align="center">Total Price</StyledTableCell>
                <StyledTableCell align="center">Payment</StyledTableCell>
                <StyledTableCell align="center">Mail Send</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {i + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.custName}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.name}</StyledTableCell>
                  <StyledTableCell align="center">{row.qty}</StyledTableCell>
                  <StyledTableCell align="center">{row.price}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.totalPrice}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span onClick={() => statusHandler(row)}>
                      Status:{payment}
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align="center" style={{ color: "red" }}>
                    Status:Pending
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack spacing={2} sx={{ mt: 2, ml: 42 }}>
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </div>
      {/* // Product Table */}
      {/* // Product Table */}
      <h1>Total Amount :{num.price} </h1>
      <PaymentModal />
    </div>
  );
}
