import React, { useContext } from 'react'
import { AuthContext } from '../../Auths/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout}=useContext(AuthContext);
    const location =useLocation();
    const navigate = useNavigate();
    const from =location.state?.from?.pathname||"/"

    const handleLogout =()=>{
        logout().then(()=>{
        alert("Logout Successfuly!");
        navigate(from,{replace:true})
    }).catch((error)=> {

    });
    }
  return (
    <div className='h-screen' onClick={handleLogout}>Logout</div>
  )
}

export default Logout