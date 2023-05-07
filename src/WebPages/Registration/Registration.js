import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Registration = () => {
  const { register, handleSubmit,  formState: { errors } } = useForm();

  const {createUser,updateUserProfile}= useContext(AuthContext)
  const registerSubmit = (e) => {

    createUser(e.email, e.password,)
    .then(result=>{
      const user= result.user;
      console.log(user)
      toast.success('Successfully created!')
      const userProfiles={
        displayName: e.name
      }
      updateUserProfile(userProfiles)
      .then(()=>{
        //wom3
      })
      .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
  };

  return (
    <div>
      <div className="register-div">
        <h1>User Registration </h1>
        <div className="register-continer">
        <form onSubmit={handleSubmit(registerSubmit)}>
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("name", { required: true })} />
      <br />  <br />
      <input {...register("email", { required: true })} />
      <br />  <br /> 
      <input {...register("password", { required: true })} type="password" />
      <br />  <br />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" value="Sign Up" />
    </form>
            <div>
              <div>
                <h5>Already Registered??</h5>
                <p>
                  Login
                  <Link to="/login">here</Link>
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
