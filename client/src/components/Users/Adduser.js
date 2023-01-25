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
import { Button } from "react-bootstrap";
// import { formSchema } from './schema/index';
import { useEffect } from "react";

const Adduser = () => {

  const history = useNavigate();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    age: "",
    address : "",
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
  console.log(user);
  
  const postData = async (e) => {
    const { firstname, lastname, gender, age ,address} = user;
    let formdata = new FormData()
    formdata.append('firstname',user.firstname)
    formdata.append('lastname',user.lastname)
    formdata.append('gender',user.gender)
    formdata.append('age',user.age)
    formdata.append('address' , user.address)
    console.log(user);
    // formdata.append('photo' , file)
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:2000/add-user",formdata
      );
      // console.log(res);
      window.alert("Registeration Successfull");
      console.log("Registeration Successfull");
      history("/about");

    } catch (error) {
      console.log("error");
      window.alert("failed");
    }
  };


  return (
    <div>
        <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px"}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  ADD USER
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBInput
                    label="firstname"
                    id="form1"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleInputs}
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="lastname"
                    id="form2"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleInputs}
                    type="email"
                  />
                </div>

                {/* <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="gender"
                    id="form3"
                    name="gender"
                    value={user.gender}
                    onChange={handleInputs}
                    type="radiobutton"
                  />
                </div> */}
         <div className="form-group">
        <div style={{marginRight:220}}>Gender:</div>
        <div className="form-check form-check-inline" value={user.gender} onChange={handleInputs}>
          <input type="radio" className="form-check-input" defaultValue="male" id="male" name="gender" formcontrolname="gender" />
          <label className="form-check-label" htmlFor="male">Male</label><br />
          <input type="radio" className="form-check-input" defaultValue="female" id="female" name="gender" formcontrolname="gender"  />
          <label className="form-check-label" htmlFor="male">Female</label>
        </div>
        </div>
        
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Age"
                    id="form4"
                    name="age"
                    value={user.age}
                    onChange={handleInputs}
                    type="number"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBInput
                    label="Address"
                    id="form4"
                    name="address"
                    value={user.address}
                    onChange={handleInputs}
                    type="text"
                  />
                </div>
                <Button variant="outline-primary"
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
                style={{height:500 , marginBottom:500}}
                  src="https://previews.123rf.com/images/kapley/kapley0901/kapley090100028/4183913-abstract-white-background-with-elements-of-design-in-the-form-of-the-bent-blue-lines.jpg"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  )
}

export default Adduser
