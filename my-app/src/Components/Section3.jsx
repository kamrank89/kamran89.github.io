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
        <div class="container overflow-hidden">
          <div class="row gx-5 gy-5">
            <div class="col">
              <Card
                link="https://github.com/kamrank89/Python-Game"
                img={require("./Images/Python.png")}
                title="Python "
                content="proficient in coding with python. familiar with OOP programing . "
                content2="Frameworks/Libraries: Numpy, Pygame, Tkinter, Matplotlib, keras, MongoDB, etc."
              />
            </div>
            <div class="col ">
              <Card
                img={require("./Images/Githubtext.png")}
                content="Proficient using Github and version control ,both from GitHub desktop app and command line."
                title="GitHub"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/C++.png")}
                content="Proficient in coding with C++ (it is not my favorite programming language). Good undrestanding of OOP in C++."
                title="C++"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Office.png")}
                content="I have been working with Micorsoft Office porgrams since 2008. Although Word was my most used application, I am proficient in PowerPoint, Excel, OneNote, OneDrive, OutLook, Teams "
                title="Microsoft Office"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Git.png")}
                content="Proficient using Git and version control ,both from Git desktop applications such as smart git and command line."
                title="Git"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/JS.png")}
                content="JavaScript is my most favorite language. I can code in JavaScript for hours and am proficient in functional programming. I have coded and cloned websites like NetFlix, andstudio, etc. This portfolio website was written in JavaScript using React and Bootstrap."
                title="JavaScript"
                content2="Frameworks/Libraries: React, Node, Express, etc."
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/Java.png")}
                content="Proficient in coding with Java. Good undrestanding of OOP in Java and the ability to do unit tests in Java."
                title="Java"
                content2="Frameworks/libraries: Junit Test"
              />
            </div>
            <div class="col">
              <Card
                img={require("./Images/htmlcss.png")}
                content="Proficient in HTML and CSS . I am also the process of learning Sass to be able to make websites more efficiently."
                title="HTML and CSS"
              />
            </div>
            <div class="col last-img">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
