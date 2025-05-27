import React from "react";

const Feedback = ({ feedback, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
};

export default Feedback;
