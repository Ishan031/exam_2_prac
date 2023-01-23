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
  const [price,setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();

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

//   const handleImg = (e) => {
//     setimg(e.target.files[0]);
//     console.log(e.target.files);
//   };

    const getUserById = async () => {
    const response = await axios.get(`http://localhost:2000/read-book/${id}`);
    setName(response.data.name);
    setAuthor(response.data.author);
    setPrice(response.data.price)
    setQuantity(response.data.quantity)
    setDescription(response.data.description) 
    console.log(response);
    // formData.append('name', name )
    // formData.append('email', email )
    // formData.append('image', image )
    // console.log(formData);
  };
  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:2000/update-book/${id}`, {
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
      window.alert("Operation Failed");
    }
  };

  const downkey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "-" , "=" , "/" , "+" , "." , "," , "[" , "]" , "{" , "}" , "'" , ";" , "_" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "(" , ")" , ":" , ">" , "<" , "?" , "|" ,"\""];

  return (
    <>
      <Card style={{ width: "30rem", height: "25rem", margin: "9rem" }}>
        <Card.Body>
      <div className="columns mt-5" style={{ backgroundColor: red}}>
        <div className="column is-half">
          <form  onSubmit={updateUser} > 
            <div className="field" style={{ marginLeft: 90 , marginTop:-50 }}>
              <label className="label">Name</label>
              <div className="control">
                <input
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
            <div className="field" style={{ marginLeft: 90 , marginTop:10}}>
              <label className="label">Author</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="field" style={{ marginLeft: 90 , marginTop:1}}>
              <label className="label">Price</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price"
                />
              </div>
            </div>
              <div className="field" style={{ marginLeft: 90 , marginTop:1}}>
              <label className="label">Quantity</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="field" style={{ marginLeft: 90 , marginTop:1}}>
              <label className="label">Description</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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

export default Editbook;
