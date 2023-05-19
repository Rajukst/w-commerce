import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Col, Container, Row } from "react-bootstrap";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "./Login.css"
import userPhoto from "../../Assets/Icons/user.png"
import { useDispatch, useSelector } from "react-redux";
import { googleLogin, loginUser } from "../../redux/allFeatures/Auth/authSlice";
import { useEffect } from "react";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.from?.pathname || "/";
  const dispatch= useDispatch()
  const {isLoading, email, isError, error}= useSelector(state=>state.auth)
  const loginSubmit = ({email, password}) => {
        dispatch(loginUser({email, password}))
       
  };
  useEffect(()=>{
    if(!isLoading && email){
      navigate(destination, { replace: true });
    }
  },[isLoading, email])
  const handleGoogleLogin=()=>{
    dispatch(googleLogin())
  }
// error message showing UI
useEffect(()=>{
if(isError){
  toast.error(error)
}
},[isError, error])
  return (
    <div className="login-div">
      <h1 className="mt-3">User login </h1>
    <img src={userPhoto} alt="userPhoto" className="userPhoto"/>
      <Container>
        <Row>
          <Col xs={12} md={5} lg={5}>
            <Col>
              <Player
                autoplay
                loop
                src="https://assets3.lottiefiles.com/packages/lf20_UW8DlCRljO.json"
                style={{ height: "300px", width: "300px" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </Col>
          </Col>
          <Col xs={12} md={7} lg={7}>
            <div className="login-continer">
              <form onSubmit={handleSubmit(loginSubmit)}>
                {/* include validation with required or other standard HTML validation rules */}
                <div className="mainInfo">
                  <h6 className="gnrlInfo">Login Information:</h6>
                  <div className="infoHead">
                    <div className="title">
                      <h6>Email:</h6>
                    </div>
                    <div className="inputTitle">
                      <input className="loginInfo"
                        {...register("email", { required: true })}
                        type="email"
                      />
                    </div>
                    <div className="title">
                      <h6>Password:</h6>
                    </div>
                    <div className="inputTitle">
                      <input className="loginInfo"
                        {...register("password", { required: true })}
                        type="password"
                      />
                    </div>
                  </div>
                </div>
                {/* errors will return when field validation fails  */}
                <div className="submitInfo">
                <input className="submitInf" type="submit" value="Login" />
                </div>
              </form>
              <div>
                <h5>New Here??</h5>
                <p>
                  Login
                  <Link to="/register">here</Link>
                </p>
                <p>Or</p>
                <button onClick={handleGoogleLogin}>Sign In With Google</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
