import React, { useState, useEffect } from "react";
import Descriptions from "./components/Descriptions";
import Options from "./components/Options";
import Feedback from "./components/Feedback";
import Notification from "./components/Notification";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const stored = localStorage.getItem("feedback-data");
    return stored ? JSON.parse(stored) : { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    localStorage.setItem("feedback-data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
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
