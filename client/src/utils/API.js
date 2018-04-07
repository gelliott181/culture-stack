import axios from "axios";

export default {
    uploadImage(formData){
        return axios.post("/api/posts", formData, {headers: { 'content-type': 'multipart/form-data'}});
    }
}