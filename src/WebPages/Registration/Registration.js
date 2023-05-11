import React, { useContext} from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Col, Container, Row } from "react-bootstrap";
import { Controls, Player} from '@lottiefiles/react-lottie-player';
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
       <h1>User Registration </h1>
      <div className="register-div">
        <Container>
          <Row>
            <Col>
            <Player
  autoplay
  loop
  src="https://assets9.lottiefiles.com/packages/lf20_pprxh53t.json"
  style={{ height: '300px', width: '300px' }}
>
  <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
</Player>
            </Col>
            <Col>
            <div className="register-continer">
          <form onSubmit={handleSubmit(registerSubmit)}>
            {/* include validation with required or other standard HTML validation rules */}
            <input {...register("name", { required: true })} type="text" />
            <br /> <br />
            <input {...register("email", { required: true })} type="email" />
            <br /> <br />
            <input
              {...register("password", { required: true })}
              type="password"
            />
            <br /> <br />
            <br /> <br />
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Registration;
