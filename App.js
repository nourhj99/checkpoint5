import React from 'react';
import logo from './logo.svg';
import './App.css';
import myImage from "./imageInSrc.png";
import './style.css';
import Cont from './Container';
import Wrapper from './wrapper';
import Profile from './Profile';
import myImage1 from "./profile.png";

function App() {
  const person = {

    photo: myImage1,

    name: { firstName: "Nour", lastName: "Haj Salem" },

    profileLink: "https://www.facebook.com/profile.php?id=100009568312592",
    
  }
  return (


    /* <div className="check" style={{ border: 'solid 1px black', maxWidth: "100%" }} >

       <h1 className="title red"> Welcome </h1>

       <br />
       <br />

       <img className="image1" src={myImage} />

       <br/>
       
       <img className="image1" src="/imageInPublic.jpg" />
     <Cont/>
     </div>*/

    /*
   <Wrapper>

     <Photo src='/profile.png' />

     <Title style={{

       color: 'red'

     }}>My Name here</Title>

     <Title small>My job here</Title>
   </Wrapper>
*/
    <div>

      <Profile person={person}/>

 
    </div>

  );
}

export default App;

