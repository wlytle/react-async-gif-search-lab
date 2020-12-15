import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    searchTerm: "",
  };

  handleInput = ({ target }) => {
    this.setState({
      searchTerm: target.value,
    });
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="Search">Enter a Search Term</label>
          <input
            type="text"
            name="search"
            onChange={this.handleInput}
            value={this.state.searchTerm}
          />

          <button
            onClick={(e) => this.props.search(e, this.state.searchTerm)}
            className="btn btn-success"
          >
            Find Gifs
          </button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
