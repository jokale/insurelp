import React from 'react';
import './App.css';
import introleft from './introleft.svg'


class App extends React.Component {
  render(){
  return (
    <div className="App">
      <div id="navbar">
        <h2>INSURE</h2>
        <p>HOW WE WORK</p>
        <p>BLOG</p>
        <p>ACCOUNT</p>
        <button>VIEW PLANS</button>
      </div><br></br>
          <div id="text-1"><br></br>
            <hr id="solid"/>
            <h1>Humanizing <br></br>your insurance.</h1>
              <p>Get your life isnurance coverage easier and faster. We blend our expertise <br></br>and technology to help you find the plan right for you. Enusre you <br></br> and your loved ones are protected.</p>
              <button>VIEW PLANS</button>
          </div>     
          <div id= "Midpage">

            <h1>We're different</h1>
            <h4 id="title1"> Snappy Process</h4>
            <p id="p1">Our application process can be completed in <br></br> minutes, not hours. Don't get stuck filling in <br></br> tedious forms</p>
            <h4 id="title2"> Affordable Prices</h4>            
            <p id="p2">We don't want you worrying about high monthly <br></br> costs. Our prices may be low, but we still offer <br></br> the best coverage possible</p>
            <h4 id="title3"> People first</h4>
            <p id="p3">Our plans aren't full of conditions and clauses <br></br>to prevent payouts. We make sure you're <br></br> covered when you need it.</p>
          </div>
               <div id="third">
                 <h1>Find out more <br></br>about how we work</h1>
                 <button>HOW WE WORK</button>
               </div>
               <div id="footer">

               </div>
       <img id="introleft"src={introleft} className="App-introleft" alt="introleft" />
    </div>
  );
}
}

export default App;
