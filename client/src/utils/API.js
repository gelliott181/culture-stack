import axios from "axios";

export default {
    uploadImage: function(formData){
        return axios.post("/api/posts", formData, {headers: { 'content-type': 'multipart/form-data'}});
    },
    getPost(id){
        return axios.get("/api/posts/" + id);
    }
}