import React from "react";

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function Education() {
  return (
    <section id="section2">
      <h1 className="reveal">Education</h1>
      <div className="item1 reveal">
        <div>
          <img
            src={require("./Images/Acc.jpg")}
            alt="not loaded"
            height={300}
            width={300}
          />
        </div>
        <div className="content">
          <p>
            Sep 2018 to July 2020 <br />
            Studied general STEM courses
          </p>
        </div>
      </div>
      <div className="item2 reveal">
        <div className="content">
          <p>
            From Aug 2020 to Oct 2022 <br />
            Bachelor in Computer Science
          </p>
        </div>
        <div>
          <img
            src={require("./Images/SNHU.png")}
            alt=""
            height={300}
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
export default Education;
