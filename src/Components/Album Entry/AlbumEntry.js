import React from "react";
import { GoTriangleUp } from "react-icons/go";

import "./AlbumEntry.css";

class AlbumEntry extends React.Component {
  render() {
    return (
      // Parent container
      <div id="album">
        <div id="imageContainer">
          {console.log(this.props)}
          <img src={this.props.imageSrc} height="120" width="120" />
        </div>

        <div id="rightContainer">
          <div>
            {/* Button will use a function from the props */}
            <button
              onClick={() => this.props.updateVotes[0](this.props.albumName)}
            >
              <GoTriangleUp />
            </button>
            {/* Counter */}
            <h2 style={{ display: "inline-block" }}>{this.props.votes}</h2>

            <button
              onClick={() => this.props.updateVotes[1](this.props.albumName)}
            >
              <GoTriangleUp style={{ transform: "rotate(180deg)" }} />
            </button>
          </div>

          <a style={{ color: "darkcyan" }}>{this.props.albumName}</a>
          <p style={{ margin: "3px 0px" }}>{this.props.date}</p>

          <span style={{ color: "gray" }}>
            Submitted by:
            <img src={this.props.submittedSrc} id="submittedByImage" />
          </span>
        </div>
      </div>
    );
  }
}

export default AlbumEntry;
