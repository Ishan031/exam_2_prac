import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Edituser = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [gender, setGender] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    loginverfy();
  }, []);

  const loginverfy = () => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  };

  useEffect(() => {
    getUserBy();
  }, []);

  const getUserBy = async () => {
    const response = await axios.get(`http://localhost:2000/read-user/${id}`);
    setFirstname(response.data.firstname);
    setLastname(response.data.lastname);
    setGender(response.data.gender);
    setAge(response.data.age);
    setAddress(response.data.address);
    // setFile(response.data.image);
    console.log(response);
  };
  const updateUser = async (e) => {
    // formdata.append('firstname', firstname )
    // formdata.append('lastname', lastname )
    // formdata.append('gender',gender)
    // formdata.append('age', age )
    // formdata.append('address',address )
    // console.log(formdata);
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2000/update-user/${id}`, {
        firstname,
        lastname,
        gender,
        age,
        address,
      });
      history("/about");
      window.alert("User Updated Successfully");
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
    <div>
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
                      FirstName:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        onKeyDown={(e) =>
                          downkey.includes(e.key) && e.preventDefault()
                        }
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
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
                      LastName:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
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
                      Gender:
                    </label>
                    <div
                      className="control"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <input
                        type="radio"
                        className="form-check-input"
                        defaultValue="male"
                        id="male"
                        name="gender"
                        formcontrolname="gender"
                        style={{ marginTop: -1, marginLeft: 30 }}
                      />{" "}
                      <br />
                      <label
                        className="form-check-label"
                        htmlFor="male"
                        style={{
                          marginLeft: 20,
                          fontWeight: 800,
                          color: "black",
                        }}
                      >
                        Male
                      </label>
                      <input
                        type="radio"
                        className="form-check-input"
                        defaultValue="female"
                        id="female"
                        name="gender"
                        formcontrolname="gender"
                        style={{ marginTop: -50, marginLeft: 90 }}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="male"
                        style={{
                          marginTop: -30,
                          marginLeft: 90,
                          fontWeight: 800,
                          color: "black",
                        }}
                      >
                        Female
                      </label>
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
                      Age:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="Number"
                        className="input"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Age"
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
                      Address:
                    </label>
                    <div className="control">
                      <input
                        style={{ borderRadius: 9, paddingLeft: 6 }}
                        type="text"
                        className="input"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Number"
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
    </div>
  );
};

export default Edituser;
