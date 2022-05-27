import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import MyImage from "./MyImage";

function App() {
  // const [showNavBar, setShowNavBar] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowNavBar(true);
  //   }, 5000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div>
      {/* {showNavBar ? <Navbar /> : null} */}
      <Navbar />
      <MyImage />
      <Contact />
    </div>
  );
}
export default App;
