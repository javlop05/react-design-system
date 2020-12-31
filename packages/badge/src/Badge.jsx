import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const TYPES = ['success', 'warning', 'error'];

function Badge({ text, type }) {
  return <span className={`badge ${type}`}>{text}</span>;
}

Badge.propTypes = {
  type: PropTypes.oneOf(TYPES).isRequired,
  text: PropTypes.string.isRequired,
};

export default Badge;
