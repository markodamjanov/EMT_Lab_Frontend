import React from "react";
import BookTerm from "../BookTerm/bookTerm";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      size: 5,
    };
  }

  render() {
    const offset = this.state.size * this.state.page;
    const nextPageOffset = offset + this.state.size;
    const pageCount = Math.ceil(this.props.books.length / this.state.size);
    const books = this.getBooksPage(offset, nextPageOffset);

    return (
      <div className={"container mm-4 mt-5"}>
        <div className={"row"}>
          <div className={"table-responsive"}>
            <table className={"table table-striped"}>
              <thead>
                <tr>
                  <th scope={"col"}>Name</th>
                  <th scope={"col"}>Category</th>
                  <th scope={"col"}>Author</th>
                  <th scope={"col"}>Country</th>
                  <th scope={"col"}>Available Copies</th>
                </tr>
              </thead>
              <tbody>{books}</tbody>
            </table>
          </div>
          <div className="col mb-3">
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <Link
                  className={"btn btn-block btn-dark"}
                  to={"/books/addBook"}
                >
                  Add new book
                </Link>
              </div>
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={<a href="/#">...</a>}
            containerClassName={"pagination flex justify-content-center"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"page-item active"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
          />
        </div>
      </div>
    );
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    this.setState({
      page: selected,
    });
  };

  getBooksPage = (offset, nextPageOffset) => {
    return this.props.books
      .map((term) => {
        return (
          <BookTerm
            term={term}
            getBook={this.props.getBook}
            markAsTaken={this.props.markAsTaken}
            deleteBook={this.props.deleteBook}
          />
        );
      })
      .filter((book, index) => {
        return index >= offset && index < nextPageOffset;
      });
  };
}

export default Books;
