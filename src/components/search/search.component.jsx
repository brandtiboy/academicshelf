import React from "react";
import axios from "axios";

import "./search.styles.scss";

import Book from "../../pages/dashboard/book/book.component";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
    };

    this.cancel = "";
  }

  fetchSearchResults = (updatedPageNo = "", query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCQCwJYzm8gZ7QTIJAjB_etRtFWKAZrYME`;

    if (this.cancel) {
      this.cancel.cancel();
    }

    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.items.length
          ? "There are no more search results"
          : "";
        this.setState({
          results: res.data.items,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data. Please check network",
          });
        }
      });
  };

  handleChange = (event) => {
    const query = event.target.value;
    this.setState({ query: query, loading: true, message: "" }, () => {
      this.fetchSearchResults(1, query);
    });
  };

  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className='results-container'>
          {results.map((result) => {
            return (
              <a
                key={result.id}
                href={result.previewLink}
                className='result-item'
              >
                <div className='image-wrapper'>
                  <a href={result.volumeInfo.infoLink}>
                    <img
                      className='image'
                      src={result.volumeInfo.imageLinks.smallThumbnail}
                      alt={result.volumeInfo.infoLink}
                    />
                  </a>
                </div>
                <h6 className='image-title'>{result.volumeInfo.title}</h6>
              </a>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query } = this.state;

    return (
      <div className='container'>
        <label className='search-label' htmlFor='search-input'>
          <input
            type='text'
            name='query'
            value={query}
            id='search-input'
            placeholder='Søg efter bog...'
            onChange={this.handleChange}
          />
        </label>
        <div>{this.renderSearchResults()}</div>
      </div>
    );
  }
}

export default Search;
