import React from 'react';
import PropTypes from 'prop-types';
import './History.css';

const History = ({ history }) => {
  return (
    <div className="history-container">
      <h3>Calculation History</h3>
      <div className="history-scroll">
        {history.map((item, index) => (
          <div key={index} className="history-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default History;
