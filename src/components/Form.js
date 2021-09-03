import React, {useState} from 'react'

const Form =(props)=>{
    const [action, setAction] = useState("");
    const [pass, setPass] = useState("");
    const [isWarned, setIsWarned] = useState(false);
    const changeHandler=(event)=>{
        if(isWarned){
            if(event.target.value.length>3){
                let warned = document.getElementById("warning");
                warned.parentNode.removeChild(warned);
                setIsWarned(false);

            }
        }
        setPass(event.target.value);
    }
    const renderButton=()=>{
        if(action==="Decrypt"){
            return("Decrypt File")
        }else if(action==="Encrypt"){
            return("Encrypt File");
        }else{
            return("Select Action")
        }
    }
    const renderLabel=()=>{
        if(action==="Decrypt"){
            return("Decryption password");
        }else if(action==="Encrypt"){
            return("Encryption password");
        }else{
            return("Enter a password");
        }
    }
    const radioClick=(e)=>{
        console.log(e.target);
        setAction(e.target.value);
    }
    const clickDecRadio=()=>{
        document.getElementById("decryptRadio").click();
    }
    const clickEncRadio=()=>{
        document.getElementById("encryptRadio").click();
    }
    function myFunction() {
        var x = document.getElementById("passInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }  
    const handleSubmit=()=>{
        if(pass.length<4){
            var passblock = document.getElementById('passBlock');
            var warning = document.createElement('p');
            warning.className="warning";
            warning.setAttribute("id", "warning")
            warning.innerHTML="Please enter password of 4 characters or more in length";
            passblock.appendChild(warning);
            setIsWarned(true);
        }else if(action===""){
            window.alert("check encrypt or decrypt");
        }else{
            props.passAction({
                action: {action},
                password: {pass}
            });
        }

    } 
    return (
        <div className="list-group">
            <div className="list-group-item list-group-item-one">
                <div className="ui form">
                    <div className="enc_dec">
                        <label for="fruit">Encrypt or Decrypt:</label>
                        <div>
                            <div className="action_radio">
                                <input type="radio" value="Encrypt" id="encryptRadio" onClick={(e)=>radioClick(e)} name="fruit" tabindex="0" />
                                <label className="action_label" onClick={(e)=>{clickEncRadio(e)}}>Encrypt</label>
                            </div>
                        </div>
                        <div>
                            <div className="action_radio">
                                <input type="radio" name="fruit" id="decryptRadio" value="Decrypt" onClick={(e)=>radioClick(e)} tabindex="0"/>
                                <label className="action_label" onClick={(e)=>{clickDecRadio(e)}}>Decrypt</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="list-group-item">
                <div classname="ui form" id="passBlock">
                    <label>{renderLabel()}</label>
                    <input className="Password" id="passInput" type="password" onChange={changeHandler}/>
                    <br/>
                    <input type="checkbox" className="checkBox" onClick={()=>myFunction()} />Show Password
                </div>
            </div>
            <div className="list-group-item button-lgi list-group-item-last">
                {<button onClick={()=>handleSubmit()} className="btn btn-primary">{ renderButton()}</button>}
            </div>
        </div>
    )

}

export default Form;

