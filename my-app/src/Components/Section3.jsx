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
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Githubtext.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="GitHub"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/C++.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="C++"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Office.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="Microsoft Office"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Git.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="Git"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/JS.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="JavaScript"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Java.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="Java"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/htmlcss.png")}
                content="knwonig diffrent frame works Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit laoreet id donec ultrices. Feugiat pretium nibh ipsum consequat nisl vel. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Senectus et netus et malesuada fames ac turpis. Parturient montes nascetur ridiculus mus. Vitae semper "
                title="HTML and CSS"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
