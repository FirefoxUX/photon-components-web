import React from "react";
import classNames from "classnames";

import "./index.css";

export const Checkbox = ({ disabled, label, ...props }) => {
  return (
    <label className={classNames("checkbox", { "checkbox--disabled": disabled })}>
      <input {...props} disabled={disabled} className="checkbox__field" type="checkbox" />
      <span className="checkbox__label">{label}</span>
    </label>
  );
};

export default Checkbox;
