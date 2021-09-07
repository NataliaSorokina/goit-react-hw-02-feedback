import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';

const Statistics = ({ state, total, positivePercentage }) => {
  const { good, neutral, bad } = state;
  return (
    <ul className={styles.list}>
      <li /* className={} */>
        Good:<span> {good}</span>
      </li>
      <li /* className={} */>
        Neutral:<span> {neutral}</span>
      </li>
      <li /* className={} */>
        Bad:<span> {bad}</span>
      </li>
      <li /* className={} */>
        Total:<span> {total}</span>
      </li>
      <li /* className={} */>
        Positive feedback:<span> {positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  state: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
