import React, { Component } from 'react';
import ThreeScene from '../threeJS/scene';
import ThreeCanvas from '../threeJS/threeJS';
import Test from '../threeJS/test';

class Header extends Component {
  render() {

   //  if(this.props.data){
   //    var name = this.props.data.name;
   //    var occupation= this.props.data.occupation;
   //    var description= this.props.data.description;
   //    var city= this.props.data.address.city;
   //    var networks= this.props.data.social.map(function(network){
   //      return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
   //    })
   //  }

    return (
       <div>
      <ThreeCanvas />


      {/* <header id="home"> */}

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
	         <li><a className="smoothscroll" href="#resume">Resume</a></li>
         
         </ul>

      </nav>

      {/* <div className="row banner">

         <div className="banner-text">
            <h1 className="responsive-headline"> Tommy Lim</h1>
            <h1 className="responsive-headline">Welcome To My Portfolio [ WIP ]</h1>
            <h3 style={{color:"black"}}>A {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
               <a href="https://mykard.netlify.app/#/kard/lim1017"><img className='fa fa-kard' src="https://www.nicepng.com/png/detail/182-1826178_my-business-card-line-comments-visiting-card-icon.png" alt="Smiley face" height="42" width="42" />
               </a>
            </ul>
         </div>
      </div> */}

      {/* <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p> */}

   {/* </header> */}
   </div>
    );
  }
}

export default Header;
