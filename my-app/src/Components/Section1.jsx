import React from "react";

function SectionOne() {
  return (
    <div id="sectionone">
      {/* Item 1 */}
      <div className="item1">
        <h1>Hello and Welcome to Kamran's Portfolio Website</h1>
      </div>
      {/* Item 2 */}
      <div className="item2">
        <div>
          <p>
            My name is Kamran, I am 32 years old and studying computer science.
            I am half Russian half Persian, moved to US 5 years ago and been a
            full-time student while being a full time employee in an amazon
            warehouse since Aug 2018. I got promoted in amazon after a few
            months to a problem solver, there were only a few of us in the whole
            warehouse and my job was to solve the problem of the other packers
            using amazon developed applications. There I saw how powerful some
            application could be and fell in love with the idea of designing
            one. Since then, I have been working hard on my degree and I will be
            finished in 3 months. I believe I am a perfect match for the job
            since my job in amazon was literally solving problems, and for that
            I had to be super-fast, and needed to have a good relationship with
            almost everyone in the warehouse. I like my mind to be engaged and
            thinking about a solution to a problem is what I love. I have been
            living in 3 different continents and been with people from different
            races which made me to be able to work in any environment with
            people of different background, believes, race. I started programing
            with python and moved to C++, then focused sometime on Java, but the
            two programming languages I know the best are Python and JavaScript.
            Once I was introduced to HTML and CSS, I could not stop myself from
            making websites and implementing new ideas for myself, recently I
            have been working on an App like Note in Microsoft windows and you
            can see the progress on my GitHub. I am familiar with React,
            Node.js, Express.js, HTML, CSS, JavaScript and wrote a few websites
            and web applications using all the mentioned Frameworks/Languages. I
            also have experience using Git and GitHub.
          </p>
        </div>
        <div className="item2 img">
          <img src={require("./Images/kamran.jpg")} alt="can not be loaded" />
        </div>
      </div>
    </div>
  );
}
export default SectionOne;
