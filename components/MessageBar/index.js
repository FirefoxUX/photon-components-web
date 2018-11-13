import React from "react";

import "./index.css";

export const MessageBar = ({ message, type, onDismiss, callToAction, ...props }) => {
  return (
      <div className={`messageBar messageBar--${type}`}>
        <span className="icon" />
        <p className="message">{message}</p>
        {callToAction}
        {onDismiss ? <a className="button button--ghost close" onClick={onDismiss}></a> : null}
      </div>
  );
};

export default MessageBar;
