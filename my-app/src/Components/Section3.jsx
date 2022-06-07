import React from "react";
import Card from "./Card";
const Skills = () => {
  return (
    <section id="section3">
      <div className="item1">
        <h1>Skills</h1>
        <p>Hover for more information</p>
      </div>
      <div className="item2">
        <div class="container">
          <div class="row g-4">
            <div class="col">
              <Card
                img={require("./Images/Python.png")}
                title="Python Programming"
                content="knwonig diffrent frame works"
              />
            </div>
            <div class="col">
              <Card img={require("./Images/Githubtext.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/C++.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/Office.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/Git.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/JS.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/Java.png")} />
            </div>
            <div class="col">
              <Card img={require("./Images/htmlcss.png")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
