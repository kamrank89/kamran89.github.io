import Contact from "./Contact";
import SectionOne from "./Section1";
import Education from "./Section2";
import Skills from "./Section3";
import Email from "./Email";
import Projects from "./Section4";

function App() {
  return (
    <div className="app">
      <Contact />
      <SectionOne />
      <Education />
      <Skills />
      {/* <Email /> */}
      <Projects />
    </div>
  );
}
export default App;
