
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
    
      <PageLayout
        header="Welcome to my website"
        children={<p>This is the content of my website.</p>}
        footer={"@ 2023 My Website. All rights reserved"}
      
      />
      
    </div>
  )
}

export default App
