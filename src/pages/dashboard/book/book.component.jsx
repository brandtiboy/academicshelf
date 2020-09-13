import React from "react";

import "./book.component.scss";

import NavBar from "../../../components/navbar/navbar.component";
//import Search from "../../../components/search/search.component";

class Book extends React.Component {
  render() {
    return (
      <div className='grid-wrapper'>
        <div className='nav-box'>
          <NavBar />
        </div>
        {/*<div className='search-box'>
            <Search />
      </div>*/}
        <div className='box'>
          <h1>Kurser</h1>
        </div>
      </div>
    );
  }
}

export default Book;
