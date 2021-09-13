import React, {useState} from 'react';
import Dropzone from 'react-dropzone';


const DropZone=(props)=>{
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsSelected] = useState(false);



    const onDropFunction=(files)=>{
        if(files[0].size>15000000){
            window.alert("File must be smaller than 15 MB");
        }else{
            setSelectedFile(files[0]);

            setIsSelected(true);
            props.passFile(files[0])
        }

    }
    const renderDrop=()=>{
        if(!isFilePicked){
            return(
                <div className="noFileText">
                    <p>Drag a file or click to upload a file</p>
                    <i className="icon square plus plusIcon"></i>

                </div>
                )
        }else{
            return(
                <div className="fileText">
                Current File is: <span className="fileName">{selectedFile.name}</span>
                <br />
                Click or drag to select a new file
                <br />
                <i className="icon square plus plusIcon"></i>
                </div>
                )
        }
    }
	return(
   <div className="input_center">

            <div  className="drop-zone">
                {/* hidden except for warning */}
                <div id="noFile" className="noFileWarning">PLEASE SELECT A FILE!</div>
                <div id="noCrypt" className="noFileWarning">PLEASE CHOOSE A '.crypt' FILE FOR DECRYPTION</div>
                <Dropzone onDrop={onDropFunction}>
                {({getRootProps, getInputProps}) => (
                    <div className="fileDropZone" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {renderDrop()}
                    <br />
                    <p className="info">Encrypt Files using SHA-256 hashed password and AES encryption.<br/>
                    Your files never leave browser.</p>
                    </div>
                )}
                </Dropzone>
            </div>


		</div>

	)

}


export default DropZone;


