import axios from "axios";
// import request from "request";

export default {
  // Gets all articles that have been saved to the database
  getArticles: function() {
    return axios.get("/api/articles");
  },
  
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  }

};