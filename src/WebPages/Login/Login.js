import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { register, handleSubmit, } = useForm();
  const [error, setError]= useState("")
  const {loginUser}= useContext(AuthContext)
  const location= useLocation()
  const navigate= useNavigate()
  const destination= location.state?.from?.pathname || "/"
  const loginSubmit = (e) => {
    loginUser(e.email, e.password)
    .then(result=>{
      const user= result.user;
      console.log(user)
      toast.success('Login Success!')
      setError("")
      navigate(destination,{replace: true})
    })
    .catch(err=>{
     setError(err)
    })
  };


  return (
    <div className="login-div">
      <h1>User login </h1>
      <div className="login-continer">
      <form onSubmit={handleSubmit(loginSubmit)}>
      
      {/* include validation with required or other standard HTML validation rules */}
      <br />  <br />
      <input {...register("email", { required: true })} type="email"/>
      <br />  <br /> 
      <input {...register("password", { required: true })} type="password" />
      <br />  <br />
      {/* errors will return when field validation fails  */}
      {error&& toast.error("something went wrong")}
      <input type="submit" value="Login" />
    </form>
      </div>
      <div>
                <h5>New Here??</h5>
                <p>
                  Login
                  <Link to="/register">here</Link>
                </p>
              </div>
    </div>
  );
};

export default Login;
