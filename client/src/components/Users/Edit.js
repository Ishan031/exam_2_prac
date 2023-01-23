import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { red } from "@mui/material/colors";
import { NavLink } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Edit = () => {
  let formdata = new FormData();

  const { id } = useParams();
  const history = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [number,setNumber] = useState();
  const [file, setFile] = useState("");
  
  useEffect(() => {
    getUserById();
  }, []);
  
  const onInputChange = (e) =>{
    setFile(e.target.files[0])
    console.log(file);
  }

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:2000/get/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setNumber(response.data.number)
    // setFile(response.data.image);
    console.log(response);
    
    
  };
  const updateUser = async (e) => {
    formdata.append('name', name )  
    formdata.append('email', email )
    formdata.append('number',number)
    formdata.append('photo', file )
    console.log(formdata);
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:2000/update/${id}`,formdata);
      history("/about");
      window.alert("User Updated Successfully");
    } catch (error) {
      console.log("Unsuccessfull");
      window.alert("Operation Failed");
    }
  };

  const downkey = ["*", "-" , "=" , "/" , "+" , "." , "," , "[" , "]" , "{" , "}" , "'" , ";" , "_" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "(" , ")" , ":" , ">" , "<" , "?" , "|" ,"\""];
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
                <input onKeyDown={(e) =>
                    downkey.includes(e.key) && e.preventDefault()
                  }
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
