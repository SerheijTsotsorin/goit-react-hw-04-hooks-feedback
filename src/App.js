import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import React, {useState} from "react";

function App () {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  
  const handleLeaveFeedback = (option) => {
    setState((prevstate) => ({
      ...prevstate,
      [option]: prevstate[option] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((100 * state.good) / countTotalFeedback());
  };

    return (
      <div className="Feedback">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={handleLeaveFeedback}
          />
        </Section>

        <Section title={"Statistics"}>
          {countTotalFeedback() ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
};

// class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  

export default App;
