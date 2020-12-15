import React, { Component } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";
import key from "../key";

class GifListContainer extends Component {
  state = {
    gifs: [],
  };

  search = (e, searchTerm) => {
    e.preventDefault();
    this.getGifs(searchTerm);
  };

  getGifs = (searchTerm) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${key.gif}&rating=g`
    )
      .then((resp) => resp.json())
      .then((gifsData) => {
        let gifs = [];
        for (let i = 0; i < 3; i++) {
          gifs.push(gifsData.data[i].images.original.url);
        }
        this.setState({
          gifs,
        });
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <GifSearch search={this.search} />
          </div>
          <div className="col">
            <GifList gifs={this.state.gifs} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.getGifs("dolphin");
  }
}

export default GifListContainer;
