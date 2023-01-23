import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Edit = () => {
  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number,setNumber] = useState();
  const [image, setimage] = useState("");

  useEffect(() => {
    getUserById();
  }, []);

  //image upload
  // const fileChange=(e)=>
  // {
  //   setImage(URL.createObjectURL(e.target.files[0]))
  //   console.log(e.target.files[0]);
  // }
  // localStorage.setItem("image",image)
  // let formData = new FormData();

    const getUserById = async () => {
    const response = await axios.get(`http://localhost:2000/get/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setNumber(response.data.number)
    // setimg(response.data.profile_path);
    console.log(response);

    // formData.append('name', name )
    // formData.append('email', email )
    // formData.append('image', image )
    // console.log(formData);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:2000/update/${id}`, {
        name,
        email,
        number,
      });
      history("/about");
      window.alert("User Updated Successfully");
    } catch (error) {
      console.log("Unsuccessfull");
      window.alert("Operation Failed");
    }
  };
  return (
    <>
      <Card style={{ width: "30rem", height: "18rem", margin: "10rem" }}>
        <Card.Body>
      <div className="columns mt-5" style={{ backgroundColor: red}}>
        <div className="column is-half">
          <form onSubmit={updateUser}>
            <div className="field" style={{ marginLeft: 90 , marginTop:-50 }}>
              <label className="label">Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="field" style={{ marginLeft: 90 , marginTop:10}}>
              <label className="label">Email</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field" style={{ marginLeft: 90 , marginTop:1}}>
              <label className="label">Number</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button
                  type="submit"
                  className="btn btn-warning mt-3"
                  style={{ marginLeft: 160 }}
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
    </>
  );
};

export default Edit;
