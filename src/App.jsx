//This app was created by Jonathan Ewers
// Checkout out my website: https://www.jonathan-ewers.com/


import React from "react";
//import './App.css';
//import './index.css';
import './index.css';
import Tool from './tool.jsx';
import Signup from './signup.jsx';
function App() {
  return (
    <section className="flex justify-center items-center text-center bg-color-1 h-screen">
      <header>
      </header>
      <div className="flex lg:w-3/6">
        <div className="flex-1">
          <h1 className="text-6xl m-5 text-color-2">
            AI cover letter helper tool.
          </h1>
          <div className="m-5">
            <p className="text-xl">
              get all the information you need to write a good non-AI cover letter by simply pasting the job description page in.
            </p>
            <Tool/>
              
              
          </div>
        </div>
      </div>

    </section>
  );
}

export default App;
