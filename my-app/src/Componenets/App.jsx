import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";

function App() {
  const [showNavBar, setShowNavBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavBar(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {showNavBar ? <Navbar /> : null}
      <Contact />
    </div>
  );
}
export default App;
