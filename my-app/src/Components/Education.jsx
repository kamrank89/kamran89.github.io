import React from "react";

function Education() {
  return (
    <section className="education">
      <div className="education items">
        <ul>
          <li>
            <img src={require("./Images/austinccd.png")} alt="not loaded" />
            <p>Austin Community College from Aug, 2018 to Aug 2020</p>
          </li>
          <li>
            <img src={require("./Images/SNHU.png")} alt="not loaded" />
            <p>Southern New Hampshire University from Sep 2020 to Sep 2022</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Education;
