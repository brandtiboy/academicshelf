import React from "react";
import { Fade } from "react-awesome-reveal";

import "./discover.styles.scss";

import NavBar from "../../../components/navbar/navbar.component";
import Search from "../../../components/search/search.component";

class Discover extends React.Component {
  render() {
    return (
      <div className='grid-wrapper'>
        <div className='nav-box'>
          <NavBar />
        </div>
        <Fade>
          <div className='search-box'>
            <Search />
          </div>
        </Fade>
        <div className='box'>
          <h1>Find bøger</h1>
        </div>
      </div>
    );
  }
}

export default Discover;
