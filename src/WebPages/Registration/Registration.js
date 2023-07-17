import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Col, Container, Row } from "react-bootstrap";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import registerPhoto from "../../Assets/Icons/ref.png";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, googleLogin } from "../../redux/allFeatures/Auth/authSlice";
import { useRegisterMutation } from "../../redux/allFeatures/Auth/authApi";
const Registration = () => {
  const {register, control, handleSubmit,reset,} = useForm();
const password= useWatch({control, name: "password"})
const confirmPassword= useWatch({control, name: "confirmPassword"})
const navigate= useNavigate();
const [disabled, setDisabled]= useState(true);
const {isLoading, email, isError, error}= useSelector(state=>state.auth)
const [postUser]= useRegisterMutation()
const dispatch= useDispatch()
useEffect(()=>{
  if(
    password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
)
  {
    setDisabled(false)
  }else{
    setDisabled(true)
  }
},[password, confirmPassword])
// error message showing UI
useEffect(()=>{
  if(isError){
    toast.error(error)
  }
  },[isError, error])
  const registerSubmit = (e) => {
    console.log(e);
    dispatch(createUser({email:e.email, password:e.password}))
    postUser({...e, role: "user"})
    reset()
    navigate("/")
  };
  const handleGoogleSignUp=()=>{
    dispatch(googleLogin())
  }
  return (
    <div>
      <h1 className="mt-3">User Registration </h1>
      <img src={registerPhoto} alt="userPhoto" className="userPhoto" />
      <div className="register-div">
        <Container>
          <Row>
            <Col xs={12} md={5} lg={5}>
              <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_pprxh53t.json"
                style={{ height: "300px", width: "300px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </Col>
            <Col xs={12} md={7} lg={7}>
              <div className="register-continer">
                <form onSubmit={handleSubmit(registerSubmit)}>
                  {/* include validation with required or other standard HTML validation rules */}
                  <div className="mainInfo">
                    <h6 className="gnrlInfo">Registration Information:</h6>
                    <div className="infoHead">
                      <div className="title">
                        <h6>Name:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="loginInfo"
                          {...register("name", { required: true })}
                        />
                      </div>
                      <div className="title">
                        <h6>Email:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="loginInfo"
                          {...register("email", { required: true })}
                          type="email"
                        />
                      </div>
                      <div className="title">
                        <h6>Password:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="loginInfo"
                          {...register("password", { required: true })}
                          type="password"
                        />
                      </div>
                      <div className="title">
                        <h6>Confirm Password:</h6>
                      </div>
                      <div className="inputTitle">
                        <input
                          className="loginInfo"
                          {...register("confirmPassword", { required: true })}
                          type="password"
                        />
                      </div>
                    </div>
                  </div>
                  {/* errors will return when field validation fails  */}
                  <div className="submitInfo">
                    <input
                      className="submitInf"
                      type="submit"
                      value="Sign UP"
                      disabled={disabled}
                    />
                  </div>
                </form>
                <div>
                  <div>
                    <h5>Already Registered??</h5>
                    <p>
                      Login
                      <Link to="/login">here</Link>
                    </p>
                  </div>
                  <p>Or</p>
                <button onClick={handleGoogleSignUp}>Sign Up With Google</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
