import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/Notification/Notification.module.css';

const Notification = ({ message }) => {
  return <p /* className={} */>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
