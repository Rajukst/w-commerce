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
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyOrders = () => {
    const [order, setOrder]= useState([])
    const { email } = useSelector((state) => state.auth);
    useEffect(() => {
        fetch(`https://ecocart.onrender.com/orders?email=${email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, []);
      console.log(order);
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
                        {manageTable?.email}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable.city}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                      {manageTable?.address}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {manageTable?.orderStatus}
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