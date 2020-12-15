import React from "react";

const showGifs = (gifs) => {
  return gifs.map((gif) => (
    <li key={gif}>
      <img alt="gif of somesort" src={gif} />
    </li>
  ));
};

const GifList = (props) => {
  return <ul className="unstyled">{showGifs(props.gifs)}</ul>;
};

export default GifList;
