import React from 'react';
import './App.css';
import introleft from './introleft.svg'
import introright from './introright.svg'
import snappy from './snappy.svg'
import affordable from './affordable.svg'
import people from './people.svg'
import workptn from './workptn.svg'
import twitter from './twitter.svg'
import insta from './insta.svg'
import facebook from './facebook.svg'
import pinterest from './pinterest.svg'




import family from './family.jpg'


class App extends React.Component {
  render(){
  return (
    <div className="App">        
    <h2>INSURE</h2>

      <div id="navbar">
        <p id="navbarp1">HOW WE WORK</p><br></br>
        <p id="navbarp2">BLOG</p><br></br>
        <p id="navbarp3">ACCOUNT</p><br></br>
        <button id="navbarbtn">VIEW PLANS</button>
      </div><br></br>
          <div id="text-1"><br></br>
            <hr id="solid"/>
            <h1 id="textoneh1">Humanizing <br></br>your insurance.</h1>
              <p id="textonep">Get your life isnurance coverage easier and faster. We blend our expertise <br></br>and technology to help you find the plan right for you. Enusre you <br></br> and your loved ones are protected.</p>
              <img id="family"src={family} className="App-family" alt="family" />
              <button id="textonebtn">VIEW PLANS</button>       
              <img id="introright"src={introright} className="App-introright" alt="introright" />

          </div>     
          <div id= "Midpage">
            <hr id="mpsolid"/>
            <h1 id="midpageh1">We're different</h1>
            <div id="row">            
            <img id="snappy"src={snappy} className="App-snappy" alt="snappy" />

            <h4 id="title1"> Snappy Process</h4>
            <p id="p1">Our application process can be completed in <br></br> minutes, not hours. Don't get stuck filling in <br></br> tedious forms</p>
           
           <div id="row2">
           <img id="affordable"src={affordable} className="App-affordable" alt="affordable" />

            <h4 id="title2"> Affordable Prices</h4>            
            <p id="p2">We don't want you worrying about high monthly <br></br> costs. Our prices may be low, but we still offer <br></br> the best coverage possible</p>
           </div>           
           
            <img id="people"src={people} className="App-people" alt="people" />
           <h4 id="title3"> People first</h4>
            <p id="p3">Our plans aren't full of conditions and clauses <br></br>to prevent payouts. We make sure you're <br></br> covered when you need it.</p>
            </div> 
           </div> <br></br>


               <div id="third">
                 <h1 id="work">Find out more <br></br>about how we work</h1>
                 <button id="workbtn">HOW WE WORK</button>      
                  <img id="workptn"src={workptn} className="App-workptn" alt="workptn" />

               </div>
               
       <img id="introleft"src={introleft} className="App-introleft" alt="introleft" />
     

  <div id="footer">
        <h1 id="footerh1"> Insure</h1>
        <hr id="footerhr"/>  
        <img id="twitter"src={twitter}  alt="twitter" />
       <img id="insta"src={insta}  alt="insta" />
       <img id="facebook"src={facebook}  alt="facebook" />
       <img id="pinterest"src={pinterest}  alt="pinterest" />

      <div id="row1">
      <p id="pfh">OUR COMPANY</p><br></br>
      <p id="pf">HOW WE WORK</p>
      <p id="pf">WHY INSURE</p>
      <p id="pf">VIEW PLANS</p>
      <p id="pf">REVIEWS</p>
      </div>


      <div id="row2">
      <p id="pfh">HELP ME</p><br></br>
      <p id="pf">FAQ</p>
      <p id="pf">TERMS OF USE</p>
      <p id="pf">PRIVACY POLICY</p>
      <p id="pf">COOKIES</p>
      </div>


      <div id="row3">
      <p id="pfh">CONTACT</p><br></br>
      <p id="pf">SALES</p>
      <p id="pf">SUPPORT</p>
      <p id="pf">LIVE CHAT</p>
      </div>


      <div id="row4">
      <p id="pfh">OTHERS</p><br></br>
      <p id="pf">CAREERS</p>
      <p id="pf">PRESS</p>
      <p id="pf">LICENSES</p>
      </div>
   </div>

    </div>
  
  );
}
}

export default App;
