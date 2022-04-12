import React from "react";
import { useNavigate } from "react-router-dom";

const EditBook = (props) => {
  const navigate = useNavigate();

  const [formData, updateFormData] = React.useState({
    name: "",
    category: "NOVEL",
    author: 1,
    availableCopies: 0,
  });

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = formData.name !== "" ? formData.name : props.selectedBook.name;
    const category =
      formData.category !== "NOVEL"
        ? formData.category
        : props.selectedBook.category;
    const author =
      formData.author !== 1 ? formData.author : props.selectedBook.author.id;
    const availableCopies =
      formData.availableCopies !== 0
        ? formData.availableCopies
        : props.selectedBook.availableCopies;

    props.editBook(
      props.selectedBook.id,
      name,
      category,
      author,
      availableCopies
    );
    navigate("/books");
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-5">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder={props.selectedBook.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="availableCopies">Available Copies</label>
              <input
                type="text"
                className="form-control"
                id="availableCopies"
                name="availableCopies"
                placeholder={props.selectedBook.availableCopies}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                className="form-control"
                onChange={handleChange}
              >
                {props.categories.map((term, key) => {
                  if (
                    props.selectedBook.category !== undefined &&
                    props.selectedBook.category === term
                  )
                    return (
                      <option
                        selected={props.selectedBook.category}
                        value={term}
                        key={key}
                      >
                        {term}
                      </option>
                    );
                  else
                    return (
                      <option value={term} key={key}>
                        {term}
                      </option>
                    );
                })}
              </select>
            </div>
            <div className="form-group">
              <label>Author</label>
              <select
                name="author"
                className="form-control"
                onChange={handleChange}
              >
                {props.authors.map((term, key) => {
                  if (
                    props.selectedBook.author !== undefined &&
                    props.selectedBook.author.id === term.id
                  )
                    return (
                      <option
                        selected={props.selectedBook.author.id}
                        value={term.id}
                        key={key}
                      >
                        {term.name}
                      </option>
                    );
                  else
                    return (
                      <option value={term.id} key={key}>
                        {term.name}
                      </option>
                    );
                })}
              </select>
            </div>
            <button id="submit" type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
