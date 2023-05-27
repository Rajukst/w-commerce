import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./DateTimer.css";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import CountDownImg from "../../../Assets/Icons/countdown.png";
const DateTimer = ({ newYear }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timerId = setInterval(() => {
      const current = new Date().getTime();
      const distance = (newYear - current) / 1000;
      if (distance > 0) {
        const days = Math.floor(distance / 60 / 60 / 24);
        const hours = Math.floor((distance / 60 / 60) % 24);
        const minutes = Math.floor((distance / 60) % 60);
        const seconds = Math.floor(distance % 60);
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      } else {
        clearInterval(timerId);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);

  return (
    <Container fluid className="dateCount">
      <Row>
        <Col xs={12} md={5} lg={5}>
          <div className="allOfferss">
          <div className="offerText">
            <h6 className="mt-5">— Limited Offer</h6>
            <h3>Hot Deal Today</h3>
          </div>
          <div className="countDown">
            <div className="times">
              <h1>{days}</h1>
              <h5>D</h5>
            </div>
            <div className="times">
              <h1>{hours}</h1>
              <h5>H</h5>
            </div>
            <div className="times">
              <h1>{minutes}</h1>
              <h5>M</h5>
            </div>
            <div className="times">
              <h1>{seconds}</h1>
              <h5>S</h5>
            </div>
          </div>
          </div>
          <div className="animations">
            <Player
              autoplay
              loop
              src="https://assets10.lottiefiles.com/packages/lf20_jcikwtux.json"
              style={{ height: "300px", width: "300px" }}
            >
              <Controls
                visible={false}
                buttons={["play", "repeat", "frame", "debug"]}
              />
            </Player>
          </div>
          <div className="subscribers">
            <div className="inputTitle">
              <input
                className="productInput myInt"
                type=""
                name=""
                id=""
                required
                placeholder="Enter Email Address"
              />
              <button className="shopBTN">Subscribe</button>
            </div>
          </div>
        </Col>
        <Col xs={12} md={7} lg={7}>
          <img className="img-fluid countImg" src={CountDownImg} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default DateTimer;
