import axios from "axios";

export default {
    uploadImage: function(formData){
        return axios.post("/api/posts", formData, {headers: { 'content-type': 'multipart/form-data'}});
    },
    getPost(id){
        return axios.get("/api/posts/" + id);
    },
    getPosts(){
        return axios.get("/api/posts");
    },
    getUser(id){
        return axios.get("/api/users" + id);
    }
}