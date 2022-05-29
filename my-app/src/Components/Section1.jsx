import React from "react";

function SectionOne() {
  return (
    <div id="sectionone">
      <div className="item1">
        <h1>Hello and Welcome to Kamran's Portfolio Website</h1>
      </div>
      <div className="item2">
        <div>
          <img src={require("./Images/kamran.jpg")} alt="can not be loaded" />
        </div>
        <div>
          <p>lore</p>
        </div>
      </div>
    </div>
  );
}
export default SectionOne;
