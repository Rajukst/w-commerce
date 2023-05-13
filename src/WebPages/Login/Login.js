import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-hot-toast";
import { Col, Container, Row } from "react-bootstrap";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import "./Login.css"
import userPhoto from "../../Assets/Icons/user.png"
const Login = () => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const destination = location.state?.from?.pathname || "/";
  const loginSubmit = (e) => {
    loginUser(e.email, e.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login Success!");
        setError("");
        navigate(destination, { replace: true });
      })
      .catch((err) => {
        setError(err);
      });
  };

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
                {error && toast.error("something went wrong")}
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
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
