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
        return axios.get("/api/users/" + id);
    },
    createComment(postId, comment){
        console.log(comment);
        return axios.post("/api/comments/" + postId, comment);
    }
}