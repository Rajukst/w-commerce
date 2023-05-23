import React from 'react';
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Swal from "sweetalert2";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';

const MyOrders = () => {
    const [order, setOrder]= useState([])
    useEffect(() => {
        fetch("https://w-commerce-server.vercel.app/orders")
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, []);
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
    return (
        <div className="addProduct-image">
        <div className="mainInfo">
          <h6 className="gnrlInfo">Order List:</h6>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>SL</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell align="center">
                      City
                    </StyledTableCell>
                    <StyledTableCell align="center">Address</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">Order Qty</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                   order.map((manageTable, index) => (
                    <StyledTableRow key={manageTable._id}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {manageTable?.emails}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.city}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                      {manageTable?.address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.sku}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {
                        manageTable?.cartItems?.reduce((x, pro) => x + pro?.qty, 0) 
                        
                        }
                        
                      </StyledTableCell>
                      <div className="button">
                        <StyledTableCell align="center">
                          {/* <button
                            onClick={() => handleDelete(manageTable._id)}
                            className="mt-2 dltButton"
                          >
                            Delete
                          </button> */}
                        </StyledTableCell>
                      </div>
                    </StyledTableRow>
                  ))
                   } 
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>

      </div>
    );
};

export default MyOrders;