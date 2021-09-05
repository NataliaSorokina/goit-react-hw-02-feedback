import PropTypes from 'prop-types';
import styles from 'components/Feedback/Feedback.module.css';
import React from 'react';

class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlePositive = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleNegative = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <section className="Feedback_controls">
          <h2 className="title">Please leave feedback</h2>
          <div className="Feedback_buttons">
            <button type="button" onClick={this.handlePositive}>
              Good
            </button>
            <button type="button" onClick={this.handleNeutral}>
              Neutral
            </button>
            <button type="button" onClick={this.handleNegative}>
              Bad
            </button>
          </div>
        </section>

        <section className="Feedback_statistics">
          <h2 className="title">Statistics</h2>
          <div className="Feedback_spans">
            <p className="Feedback_value">
              Good:<span>{this.state.good}</span>
            </p>
            <p className="Feedback_value">
              Neutral:<span>{this.state.neutral}</span>
            </p>
            <p className="Feedback_value">
              Bad:<span>{this.state.bad}</span>
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Feedback;
