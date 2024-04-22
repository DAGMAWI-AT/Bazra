import React, { useContext } from 'react'
import { AuthContext } from '../Auths/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    const location = useLocation();

    if (loading) {
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', 
          }}
        >
          <div className='text-center'>
            <Spinner aria-label='center-aligned spinner example' />
          </div>
        </div>
      );
    }

    if(user){
        return children;
    }
  return (
    <Navigate to="/admin/login" state={{from: location}} replace></Navigate>
  )
}

export default PrivateRoute