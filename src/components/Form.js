import React, { useState } from "react";

// axios
// import axios from "axios";

// styles
import "../styles/exitform.css";

// icons
import { BsCheckCircle } from "react-icons/bs";

// rank data
import { shuffledOptions } from "./RankOptions.js";

// values should match database
const initialState = {
  reason_other: "",
  prevent_other: "",
  ranking: "",
  other: "",
  contract: "",
  why_leaving: ""
};

const Form = (props) => {
  const [values, setValues] = useState(initialState);
  const [valid, setValid] = useState(false);
  const [submitted, setSubmit] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "ranking") {
      var rank = event.target.value.replace(/[^a-z\s]/gi, "");

      setValues({
        ...values,
        [event.target.name]: rank
      });
    } else {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      values.reason_other !== "" &&
      values.prevent_other !== "" &&
      (values.ranking.length === 3) & (values.ranking !== "") &&
      values.other &&
      values.contract !== "" &&
      values.why_leaving !== ""
    ) {
      console.log(values);

      setValid(true);
    }

    if (valid & submitted) {
      document.getElementById("ef-container").reset();
    }
  };

  if (submitted & valid) {
    return (
      <div id="thank-you-container">
        <h3>Thank you for your submission.</h3>
        <BsCheckCircle className="fade check-circle" />
      </div>
    );
  }

  return (
    <div>
      <div id="exitform-container">
        {/* heading */}
        <h1>Xerox Exit Form</h1>
        <p>
          We appreciate your feedback. Please fill out the form below to
          completion.
        </p>
        {/* form */}
        <form onSubmit={handleSubmit} id="ef-container">
          <h2>Please fill in the following fields:</h2>

          <label>What are your main reasons for leaving Xerox?</label>
          <textarea
            name="reason_other"
            className="form-textarea"
            placeholder="My main reasons for leaving Xerox are..."
            autoComplete="off"
            value={values.reason_other}
            onChange={handleChange}
          />

          <label>Are you leaving Xerox as your contract is ending?​</label>
          <label>
            <input
              type="radio"
              name="contract"
              value="yes"
              id="yes"
              className="form-radio"
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="contract"
              value="no"
              className="form-radio"
              onChange={handleChange}
            />
            No
          </label>
          {submitted && !values.contract && (
            <span className="error-message">
              Please select one of the options above.
            </span>
          )}

          <label style={{ marginTop: "10px" }}>
            Are you leaving Xerox due to relocation, going back to school, or
            personal reasons?​
          </label>
          <label>
            <input
              type="radio"
              name="why_leaving"
              onChange={handleChange}
              value="Relocation"
              className="form-radio"
            />
            Relocation
          </label>
          <label>
            <input
              type="radio"
              name="why_leaving"
              onChange={handleChange}
              value="Going Back to School"
              className="form-radio"
            />
            Going Back to School
          </label>
          <label>
            <input
              type="radio"
              name="why_leaving"
              onChange={handleChange}
              value="Personal Reasons"
              className="form-radio"
            />
            Personal Reasons
          </label>
          <label>
            <input
              type="radio"
              name="why_leaving"
              onChange={handleChange}
              value="Other"
              className="form-radio"
            />
            Other
          </label>
          {submitted && !values.why_leaving && (
            <span className="error-message">
              Please select one of the options above.
            </span>
          )}

          <label style={{ marginTop: "15px" }}>
            What actions could have been taken to prevent you from leaving
            Xerox?
          </label>
          <textarea
            name="prevent_other"
            className="form-textarea"
            placeholder="Some preventative actions include..."
            autoComplete="off"
            value={values.prevent_other}
            onChange={handleChange}
          />
          {submitted && !values.prevent_other && (
            <span className="error-message">Please enter a response.</span>
          )}

          <label>
            Rank the items below in order of how much they contributed to your
            decision to leave Xerox, with "1" being the most significant
            contributor. Please select your top three.
            <ol type="a">
              {/* display the shuffled rank options */}
              {shuffledOptions.map((option) => (
                <li key={option}>{option}</li>
              ))}
            </ol>
          </label>
          <div>
            <input
              type="text"
              name="ranking"
              className="form-input"
              placeholder="Top 3 Contributors"
              autoComplete="off"
              value={values.ranking}
              onChange={handleChange}
            />
            {submitted &&
              (!values.ranking || !(values.ranking.length === 3)) && (
                <span className="error-message">
                  Please enter yout top 3 choices.
                </span>
              )}
          </div>

          <label style={{ marginTop: "21px" }}>
            Do you have any other comments, questions, or concerns?
          </label>
          <textarea
            name="other"
            className="form-textarea"
            placeholder=""
            autoComplete="off"
            value={values.other}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="form-button button"
            onClick={() => setSubmit(true)}
          >
            SUBMIT
          </button>
        </form>{" "}
      </div>
    </div>
  );
};

export default Form;
