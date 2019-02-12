import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import image1 from "C:/Users/M Jaafar/Go My Code Projects/React/my-app/src/micro-sim-card.png"
import image2 from "C:/Users/M Jaafar/Go My Code Projects/React/my-app/src/visa_master.jpg"


const TopDiv =()=>{

return(
  <div className="topContainer" >
        <img className="ship-img" alt="Logo" src={image1} />
        <span class="topContainerText"><strong>CREDIT CARD</strong></span>
 </div>
    )

}

const BottomDiv =()=>{
    return (
        <div class="bottomContainer">
        <div class="sectionLeft">
          <div className="carNumber">7481&nbsp;&nbsp;5597&nbsp;&nbsp;4453&nbsp;&nbsp;7812</div>
          <div className="sectionLeftCenter">
             <div>5422</div>
             <div>11/50</div>
        </div>
            <div className="SectionHolder"><span class="holderSpan">CARDHOLDER</span></div>
        </div>
        <div class="sectionRight">
        <img className="visa-img" alt="visa-master" src={image2} />
        </div>
        </div>
    )

}

const App = () =>{
return (
<div className="container">
     <div className="card">
      <TopDiv/>
      <BottomDiv/>
     </div>
</div>
)

}


ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
