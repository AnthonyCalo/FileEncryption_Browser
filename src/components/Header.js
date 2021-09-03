import React from 'react';



const Header =()=>{
    return(
           <div id="header" className="ui menu ac_header">
               <a href="/" className='item header_item'>AC Encryption</a>
               <div className="right menu">
               <img alt="github" href="/" className="gitLogo" src="/images/git_logo.png" />
               </div>
           </div>
       )
}
export default Header;