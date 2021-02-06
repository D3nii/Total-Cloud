import React from "react";
import { GoTriangleUp } from "react-icons/go";

import "./AlbumEntry.css";

class AlbumEntry extends React.Component {
  render() {
    return (
      // Parent container
      <div id="album">
        <div id="imageContainer">
          <img
            src="https://lh3.googleusercontent.com/proxy/r262PoRN233OcF4-T9ITwDYc5_ON3BcNECjqZ0A3uNAURGoAwJvjQE47lfBmzvRhL9tyUKkO3yMKVGPQHjwzl1wrv4n74DYrhitpWfRCwgeW88pY0S6faYb61VFV2oRIa2-FiPN0Mj-a8bePDyEBZMpLVnbXJXPLJVgM6HI3n0pHouBBIxDv-6ZKv4JK8iB3lu8rfoE7jS4P0Q"
            height="120"
          />
        </div>

        <div id="rightContainer">
          <div>
            {/* Button will use a function from the props */}
            <button>
              <GoTriangleUp />
            </button>
            {/* Counter */}
            <h2 style={{ display: "inline-block" }}>47</h2>
          </div>

          <a style={{ color: "darkcyan" }}>Algorythm</a>
          <p style={{ margin: "3px 0px" }}>Beyond Creation, 2018</p>

          <span style={{ color: "gray" }}>
            Submitted by:
            <img
              src="https://goop-img.com/wp-content/uploads/2015/08/9-Best-Clean-Face-Oils-TLP-MANI-0100_Magdalena-Niziol-The-Licensing-Project.jpg"
              id="submittedByImage"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default AlbumEntry;
