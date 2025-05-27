import React from "react";

const Options = ({ onLeaveFeedback, total, onReset }) => {
  return (
    <>
      <button onClick={() => onLeaveFeedback("good")}>Good</button>
      <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
      <button onClick={() => onLeaveFeedback("bad")}>Bad</button>

      {total > 0 && <button onClick={onReset}>Reset</button>}
    </>
  );
};

export default Options;
