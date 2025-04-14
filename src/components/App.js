
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
    
      <PageLayout
        header="Welcome to my website"
        children={<main>This is the content of my website</main>}
        footer={"@ 2023 My Website. All rights reserved"}
      
      />
      
    </div>
  )
}

export default App
