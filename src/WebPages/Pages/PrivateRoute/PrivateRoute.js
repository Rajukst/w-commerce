import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const PrivateRoute = ({children}) => {
const {isLoading, email}= useSelector(state=>state.auth)
    const location= useLocation()
    if(isLoading){
        return <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    }
    if(email){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;