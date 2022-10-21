import React from 'react'
import "../styles/Styles.css";

const PointsPopup = props => {
    return (
      <div className="popup-box">
        <div className="box">
          <span className="btn-close" onClick={props.handleClose}>x</span>
          {props.content}
        </div>
      </div>
    );
  };

export default PointsPopup