import React from 'react'

class Footer extends React.Component{
    year = new Date().getFullYear();
    render(){
        return(
            <div className="footer">
                <p>Developed by Anthony Calo ©{this.year}</p>
                <p>©{this.year}</p>
            </div>
        )
    }
}

export default Footer;
