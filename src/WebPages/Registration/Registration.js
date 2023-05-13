import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Col, Container, Row } from "react-bootstrap";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import registerPhoto from "../../Assets/Icons/ref.png";
const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const registerSubmit = (e) => {
    createUser(e.email, e.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Registration Successfull!");
        const userProfiles = {
          displayName: e.name,
        };
        updateUserProfile(userProfiles)
          .then(() => {
            //wom3
          })

          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

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
                          {...register("email", { required: true })}
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
                    </div>
                  </div>
                  {/* errors will return when field validation fails  */}
                  <div className="submitInfo">
                    <input
                      className="submitInf"
                      type="submit"
                      value="Sign UP"
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
