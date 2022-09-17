import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "../../styles/index.css";
import propTypes from "prop-types";

const SecondsCounter = (props) => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center contador p-3">
      <div>
        <FontAwesomeIcon icon={faClock} />
      </div>
      <div>{props.digitSix % 10}</div>
      <div>{props.digitFive % 10}</div>
      <div>{props.digitFour % 10}</div>
      <div>{props.digitThree % 10}</div>
      <div>{props.digitTwo % 10}</div>
      <div>{props.digitOne % 10}</div>
    </div>
  );
};

SecondsCounter.propTypes = {
  digitOne: propTypes.number,
  digitTwo: propTypes.number,
  digitThree: propTypes.number,
  digitFour: propTypes.number,
  digitFive: propTypes.number,
  digitSix: propTypes.number,
};

export default SecondsCounter;
