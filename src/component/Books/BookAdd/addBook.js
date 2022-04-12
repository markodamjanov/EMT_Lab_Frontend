import React from "react";

import { useNavigate } from "react-router-dom";

const AddBook = (props) => {
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
    const name = formData.name;
    const category = formData.category;
    const author = formData.author;
    const availableCopies = formData.availableCopies;

    props.addBook(name, category, author, availableCopies);
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
                required
                placeholder="Enter book name"
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
                placeholder="availableCopies"
                required
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
                {props.categories.map((term, key) => (
                  <option value={term} key={key}>
                    {term}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Author</label>
              <select
                name="author"
                className="form-control"
                onChange={handleChange}
              >
                {props.authors.map((term, key) => (
                  <option value={term.id} key={key}>
                    {term.name}
                  </option>
                ))}
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

export default AddBook;
