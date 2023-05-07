import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { toast } from 'react-hot-toast';
import { Button, Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location= useLocation()
    if(loading){
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
    if(user){
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;