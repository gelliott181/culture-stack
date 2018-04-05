import React, { Component } from "react";
import API from "../utils/API";

class UploadForm extends Component {
    state = {
        img_file: null
    }

    handleFileChange = event => {
        this.setState({img_file: event.target.files[0]});
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.img_file){
            console.log(this.state.img_file.name);
            let formData = new FormData();
            formData.append("element1", "Upload")
            formData.append("element2", this.state.img_file)
            API.uploadImage(formData)
            .then(res => {
                this.setState({img_file: null});
            })
            .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <form encType="multipart/form-data">
                    <label htmlFor="img_upload">
                        Upload Image:
                        <input 
                            type="file"
                            name="img_upload"
                            onChange={this.handleFileChange}
                        />
                    </label>
                    <input 
                        type="submit"
                        onClick={this.handleSubmit}
                    />
                </form>

            </div>
        )
    }
}

export default UploadForm;