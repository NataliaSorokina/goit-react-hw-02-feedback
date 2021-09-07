import React from 'react';
import styles from './App.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = label => {
    this.setState(prevState => {
      return {
        [label]: prevState[label] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const quantities = Object.values(this.state);
    return quantities.reduce((quantitiy, total) => total + quantitiy, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percentage = Math.round((this.state.good * 100) / this.countTotalFeedback());
    return percentage ? percentage : 0;
  };

  render() {
    const { state, handleFeedback, countTotalFeedback, countPositiveFeedbackPercentage } = this;
    const options = Object.keys(state);

    return (
      <div>
        <Section title="Please leave feedback">
          {<FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />}
        </Section>

        <Section title="Statistics">
          {
            <Statistics
              state={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          }
        </Section>
      </div>
    );
  }
}

export default App;
