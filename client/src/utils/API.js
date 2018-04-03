import axios from "axios";

export default {
    uploadImage(formData){
        console.log("Hello");
        return axios.post("/api/upload", formData, {headers: { 'content-type': 'multipart/form-data'}});
    }
}