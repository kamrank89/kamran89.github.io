import React from "react";

const reveal = () => {
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
};

window.addEventListener("scroll", reveal);

const Education = () => {
  return (
    <section id="section2">
      <h1 className="reveal">Education</h1>
      <div className="item1 reveal">
        <div>
          <a href="https://www.austincc.edu/">
            <img
              src={require("./Images/Acc.jpg")}
              alt="not loaded"
              height={300}
              width={300}
            />
          </a>
        </div>
        <div className="content">
          <p>
            From Sep 2018 to July 2020 <br />
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
          <a href="https://www.snhu.edu/">
            <img
              src={require("./Images/SNHU.png")}
              alt=""
              height={300}
              width={300}
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Education;
