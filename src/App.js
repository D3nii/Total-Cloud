import "./App.css";

import AlbumEntry from "./Components/Album Entry/AlbumEntry";

function App() {
  return (
    <div className="App">
      <h2 style={{ marginBottom: "0px" }}>Popular Metal Albums</h2>

      <hr style={{ width: "90%", border: "1px solid lightgray" }} />

      {/* use a json array to make the albums */}

      <AlbumEntry />
      <AlbumEntry />
      <AlbumEntry />
      <AlbumEntry />

      <br />

      <form>
        <h2>Add New</h2>
        <input placeholder="Album Name"></input>
        <input placeholder="Band Name"></input>
        <input placeholder="Release Year"></input>
        <input placeholder="Album Cover URL"></input>
        <input placeholder="More info URL"></input>
        <select>
          <option>Submitted by</option>
          <option></option>
          <option></option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
