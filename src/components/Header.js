import React from 'react';


/* eslint-disable */ 
const Header =()=>{
    return(
           <div id="header" className="ui menu ac_header">
               <a href="/" className='item header_item'>AC Encryption</a>
               <div className="right menu">
               <a href="https://github.com/paulie-walnuts/FileEncryption_Browser" target="_blank" rel="noreferrer"><img alt="github"  className="gitLogo" src="/images/git_logo.png" /></a>
               </div>
           </div>
       )
}
export default Header;