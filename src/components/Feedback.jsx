import React from "react";

const Feedback = (feedback) => {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
    </>
  );
};

export default Feedback;
