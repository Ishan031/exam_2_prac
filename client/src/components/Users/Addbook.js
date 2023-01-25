import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol, 
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";
// import { formSchema } from './schema/index';
import { useEffect } from "react";
import { Button } from "react-bootstrap";

const Signup = () => {
  const history = useNavigate();
  const [user, setUser] = useState({
    name: "",
    author: "",
    price: "",
    quantity: "",
    description : "",
  });

  useEffect(() => {
    loginverfy();
  }, []);

  const [file, setFile] = useState("");
  const onInputChange = (e) =>{
    setFile(e.target.files[0])
    console.log(file);
  }

  const loginverfy = () => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  };
  //  console.log(user);
  let name, value;

  const handleInputs = (e) => {
    // console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };
  
  const postData = async (e) => {
    const { name, author, price, quantity , description } = user;
    let formdata = new FormData()
    formdata.append('name',user.name)
    formdata.append('author',user.author)
    formdata.append('price',user.price)
    formdata.append('quantity',user.quantity)
    formdata.append('description' , user.description)
    formdata.append('photo' , file)
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:2000/add-book",formdata
      );
      // console.log(res);

      if (res.status === 422 || !res) {
        window.alert("Registeration Failed");
        console.log("Registeration Failed");
      } else {
        window.alert("Registeration Successfull");
        console.log("Registeration Successfull");
        history("/viewbook");
      }
    } catch (error) {
      console.log("error");
      window.alert("Please Fill all the details");
    }
  };

  // const imageUpload = (event) =>{
  //   // console.log(event.target.files);
  //   setUser({...user,image: event.target.files[0]})
  // }


  return (
    <div>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px" }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  ADD BOOK
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBInput
                    label="Book Name"
                    id="form1"
                    name="name"
                    value={user.name}
                    onChange={handleInputs}
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Author"
                    id="form2"
                    name="author"
                    value={user.author}
                    onChange={handleInputs}
                    type="email"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Price"
                    id="form3"
                    name="price"
                    value={user.price}
                    onChange={handleInputs}
                    type="Number"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Quantity"
                    id="form4"
                    name="quantity"
                    value={user.quantity}
                    onChange={handleInputs}
                    type="Number"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Description"
                    id="form4"
                    name="description"
                    value={user.description}
                    onChange={handleInputs}
                    type="text"
                  />
                </div>
                <div>
                    <input type="file" name="photo" 
                    onChange={onInputChange}/>
                  </div>
                <Button
                  className="mb-5"
                  size="lg"
                  id="signup"
                  onClick={postData}
                >
                  Register
                </Button>
              </MDBCol>
              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://media.istockphoto.com/id/949118068/photo/books.jpg?s=612x612&w=0&k=20&c=1vbRHaA_aOl9tLIy6P2UANqQ27KQ_gSF-BH0sUjQ730="
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
};

export default Signup;
