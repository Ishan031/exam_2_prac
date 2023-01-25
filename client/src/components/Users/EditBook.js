import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Editbook = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();

  useEffect(() => {
    getUserById();
  }, []);

  useEffect(() => {
    loginverfy();
  }, []);

  const loginverfy = () => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:2000/read-book/${id}`);
    setName(response.data.name);
    setAuthor(response.data.author);
    setPrice(response.data.price);
    setQuantity(response.data.quantity);
    setDescription(response.data.description);
    console.log(response);
    // formData.append('name', name )
    // formData.append('email', email )
    // formData.append('image', image )
    // console.log(formData);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:2000/update-book/${id}`, {
        name,
        author,
        price,
        quantity,
        description,
      });
      history("/viewbook");
      window.alert("Book Updated Successfully");
    } catch (error) {
      console.log("Unsuccessfull");
      window.alert("Please Fill all the details");
    }
  };

  const downkey = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "*",
    "-",
    "=",
    "/",
    "+",
    ".",
    ",",
    "[",
    "]",
    "{",
    "}",
    "'",
    ";",
    "_",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "(",
    ")",
    ":",
    ">",
    "<",
    "?",
    "|",
    '"',
  ];

  return (
    <>
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <Card
          id="cardback2"
          style={{
            width: "0rem",
            marginLeft: "450px",
            paddingTop: "90px",
            opacity: "0.6",
          }}
        >
          <Card.Body>
            <div style={{ backgroundColor: red }}>
              <div className="column is-half">
                <form onSubmit={updateUser}>
                  <div className="field" style={{ marginLeft: 90 }}>
                    <label
                      className="label"
                      style={{ fontWeight: 800, color: "black" }}
                    >
                      Name:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        onKeyDown={(e) =>
                          downkey.includes(e.key) && e.preventDefault()
                        }
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div
                    className="field"
                    style={{ marginLeft: 90, marginTop: 10 }}
                  >
                    <label
                      className="label"
                      style={{ fontWeight: 800, color: "black" }}
                    >
                      Author:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div
                    className="field"
                    style={{ marginLeft: 90, marginTop: 1 }}
                  >
                    <label
                      className="label"
                      style={{ fontWeight: 800, color: "black" }}
                    >
                      Price:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="number"
                        className="input"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Price"
                      />
                    </div>
                  </div>
                  <div
                    className="field"
                    style={{ marginLeft: 90, marginTop: 1 }}
                  >
                    <label
                      className="label"
                      style={{ fontWeight: 800, color: "black" }}
                    >
                      Quantity:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="Number"
                        className="input"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                  <div
                    className="field"
                    style={{ marginLeft: 90, marginTop: 1 }}
                  >
                    <label
                      className="label"
                      style={{ fontWeight: 800, color: "black" }}
                    >
                      Description:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <button
                        type="submit"
                        className="btn btn-warning mt-3"
                        style={{ marginLeft: 160, borderRadius: 15 }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Editbook;
