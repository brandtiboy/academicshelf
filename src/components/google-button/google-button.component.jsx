import React from "react";

import "./google-button.styles.scss";

const GoogleButton = ({ children, ...otherProps }) => (
  <button className='google-button' {...otherProps}>
    {children}
  </button>
);

export default GoogleButton;
