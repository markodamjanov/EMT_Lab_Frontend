import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibraryService from "../../repository/libraryRepository";
import Books from "../Books/BookList/listBooks";
import AddBook from "../Books/BookAdd/addBook";
import Header from "../Header/header";
import EditBook from "../Books/BookEdit/editBook";
import Category from "../Categories/categories";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      categories: [],
      books: [],
      selectedBook: {},
    };
  }

  render() {
    return (
      <Router>
        <main>
          <Header />
          <Routes>
            <Route
              path={"/books/edit/:id"}
              element={
                <EditBook
                  categories={this.state.categories}
                  authors={this.state.authors}
                  selectedBook={this.state.selectedBook}
                  editBook={this.editBook}
                />
              }
            />
            <Route
              path={"/books/addBook"}
              element={
                <AddBook
                  addBook={this.addBook}
                  categories={this.state.categories}
                  authors={this.state.authors}
                />
              }
            />
            <Route
              path={"/books"}
              element={
                <Books
                  books={this.state.books}
                  getBook={this.getBook}
                  markAsTaken={this.markAsTaken}
                  deleteBook={this.deleteBook}
                />
              }
            />
            <Route
              path={"/categories"}
              element={<Category categories={this.state.categories} />}
            />
            <Route
              path={"/*"}
              element={
                <Books
                  books={this.state.books}
                  getBook={this.getBook}
                  markAsTaken={this.markAsTaken}
                  deleteBook={this.deleteBook}
                />
              }
            />
          </Routes>
        </main>
      </Router>
    );
  }

  componentDidMount() {
    this.loadAuthors();
    this.loadCategories();
    this.loadBooks();
  }

  loadAuthors = () => {
    LibraryService.fetchAuthors().then((data) => {
      this.setState({
        authors: data.data,
      });
    });
  };

  loadCategories = () => {
    LibraryService.fetchCategories().then((data) => {
      this.setState({
        categories: data.data,
      });
    });
  };

  loadBooks = () => {
    LibraryService.fetchBooks().then((data) => {
      this.setState({
        books: data.data,
      });
    });
  };

  addBook = (name, category, authorId, availableCopies) => {
    LibraryService.addBook(name, category, authorId, availableCopies).then(
      () => {
        this.loadBooks();
      }
    );
  };

  editBook = (id, name, category, authorId, availableCopies) => {
    LibraryService.editBook(id, name, category, authorId, availableCopies).then(
      () => {
        this.loadBooks();
      }
    );
  };

  getBook = (id) => {
    LibraryService.getBook(id).then((data) => {
      this.setState({
        selectedBook: data.data,
      });
    });
  };

  deleteBook = (id) => {
    LibraryService.deleteBook(id).then(() => {
      this.loadBooks();
    });
  };

  markAsTaken = (id) => {
    LibraryService.markAsTaken(id).then(() => {
      this.loadBooks();
    });
  };
}

export default App;
