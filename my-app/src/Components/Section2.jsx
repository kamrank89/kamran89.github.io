import React from "react";

function Education() {
  return (
    <section id="section2">
      <h1>Education</h1>
      <div className="item1">
        <img
          src={require("./Images/Acc.jpg")}
          alt="not loaded"
          height={500}
          width={500}
        />
        <p>From 2018 t0 2020</p>
      </div>
      <div className="item2">
        <p>From 2020 to 2022</p>
        <img
          src={require("./Images/SNHU.png")}
          alt=""
          height={400}
          width={400}
        />
      </div>
    </section>
  );
}
export default Education;
