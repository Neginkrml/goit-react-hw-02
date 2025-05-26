import React, { useState, useEffect } from "react";
import Descriptions from "./components/Descriptions";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Descriptions />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback}
      />
      <Feedback />

      {totalFeedback === 0 ? (
        <Notification message="Henüz geri bildirim yok" />
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </>
  );
};

export default App;
