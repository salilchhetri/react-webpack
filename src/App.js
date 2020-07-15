import React from "react";
import emu from "./emu.jpg";
import "./main.css";

function App() {
  return (
    <div className="container">
      <h1>
        Gald you're here!<pre>Happy coding...</pre>
      </h1>

      <img src={emu} />
      <p>
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@veverkolog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Dušan Smetana
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/funny-dog?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </p>
    </div>
  );
}

export default App;
