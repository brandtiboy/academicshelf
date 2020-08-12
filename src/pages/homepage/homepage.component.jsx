import React from "react";
import logo from "./logo.svg";

import "./homepage.styles.scss";

class HomePage extends React.Component {
  render() {
    return (
      // Hero area for the homepage
      <div className='homepage'>
        <div className='hero-area'>
          <img src={logo} alt='logo' className='logo' />
          <h1 className='headline'>
            Akademisk overblik. Dit online bibliotek.
          </h1>
          <p className='subtitle'>
            Skabt som tool til studerende der ønsker at have et samlet overblik
            over bøger til deres enkelte fag eller tidligere studerende der
            ønsker det som reference.
          </p>
          <div className='overlay'></div>
        </div>
        <div>Test</div>
      </div>
    );
  }
}

export default HomePage;
