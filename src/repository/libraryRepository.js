import axios from "../custom-axios/axios";

const LibraryService = {
  fetchAuthors: () => {
    return axios.get("/authors");
  },
  fetchCategories: () => {
    return axios.get("/categories");
  },
  fetchBooks: () => {
    return axios.get("/books");
  },
  addBook: (name, category, authorId, availableCopies) => {
    return axios.post("/addBook", {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    });
  },
  editBook: (id, name, category, authorId, availableCopies) => {
    return axios.put(`/editBook/${id}`, {
      name: name,
      category: category,
      authorId: authorId,
      availableCopies: availableCopies,
    });
  },
  getBook: (id) => {
    return axios.get(`/${id}`);
  },
  markAsTaken: (id) => {
    return axios.put(`/mark/${id}`);
  },
  deleteBook: (id) => {
    return axios.delete(`/delete/${id}`);
  },
};

export default LibraryService;
