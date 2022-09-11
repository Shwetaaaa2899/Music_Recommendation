import React, { useState } from "react";
import "./styles.css";
//objects having key as buttonname and values as  array of object
const database = {
  Korean_Songs: [
    { name: "Stay [Goblin]", rating: "4.9/5" },
    { name: "Maria [Hwasa]", rating: "5/5" },
    { name: "Sunday [Home Twon]", rating: "4/5" }
  ],

  English_Songs: [
    {
      name: "Rock a Bye [Annie Marie]",
      rating: "4.5/5"
    },
    {
      name: "Stay [ J.B ]",
      rating: "5/5"
    },
    {
      name: "Who says [ Selena ]",
      rating: "5.5/5"
    }
  ],
  Motivational_Songs: [
    {
      name: "Dil Ye ziddhi hai",
      rating: "4.5/5"
    },
    {
      name: "Badal pe paon Hai",
      rating: "5/5"
    },
    {
      name: "Yun hi Chala Chal",
      rating: "5.3/5"
    }
  ]
};

// var engSong = ["Rockabye", "God's plan"];
// var korSong = ["Sunday-Home Town Cha Cha", "Goblin's Stay"];
// var hinSong = ["Kesariya", "hindi"];
export default function App() {
  const [val, setVal] = useState("Korean_Songs");
  function listHandler(arr) {
    setVal(arr);
  }
  // var ans = val;
  return (
    <div className="App">
      <h2>🎵My Music Playlist</h2>
      <p>Checkout my favorite music. Select a genre to get started</p>
      <div className="ul">
        {Object.keys(database).map((items) => (
          <button className="button" onClick={() => listHandler(items)}>
            {items}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {database[val].map((item) => (
            <li className="item" id="list-item" key={item}>
              <div style={{ fontSize: "larger" }}>{item.name}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
