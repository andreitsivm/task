import React from "react"
import './UploadForm.scss'


const UploadForm=(props)=>{
    return(
        <div className="upload-container" >
            <label htmlFor="upload"><span id="filename">{props.fileName}</span><input ref={props.inputRef} id="upload"
                                              onChange={props.handleImageChange}
                                              name="photo" type="file"
                                              accept="image"
            formEncType="multipart/form-data"/>
                    <span id="browse">Browse</span></label>
           </div>

    )
}

export default UploadForm