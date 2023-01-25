import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [tokens,Setokens] = useState('');
  
  const loginuser = async (e) => {
    e.preventDefault();
    try {
      const cookies = new Cookies();
      const res = await axios.post("http://localhost:2000/signin", {
        email,
        password,
      });
      // console.log(res.data.tokens);
      // console.log(res.data.tokens);
      localStorage.setItem("token", JSON.stringify(res.data.tokens));
      cookies.set("jwtoken", res.data.tokens, {
        expires: new Date(Date.now() + 25892000),
      });
      if (res.status === 400 || !res.status) {
        toast.warning("Invalid Credentials")
      } else {
        toast.success("Login Successfull");
        // console.log(res);
        setTimeout(() => {
          history("/viewbook");
        }, 2000);
      }
    } catch (err) {
      console.log("Cannot Post");
      toast.warning("Invalid Credentials")  
    }
  };

  const emailverify = ["+" , "=" , ")" , "(" , "*" , "&" , "%" , "#" , "!" , "-" , "$" , "^"]


  return (
    <div className="back">
        <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
      <MDBContainer id="card">
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              {/* <MDBCardImage
                src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              /> */}
            </MDBCol>

            <MDBCol md="8">
              <MDBCardBody>
                <div style={{marginLeft:240 , paddingBottom:20}}>
                  <h3 className="logtext">Login Here</h3>
                </div>
                <MDBInput onKeyDown={(e) =>
                    emailverify.includes(e.key) && e.preventDefault()
                    }
                  wrapperClass="mb-4"
                  placeholder="Email address"
                  id="form1"
                  name="email"
                  style={{opacity:0.7}}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  placeholder="Password"
                  id="form2"
                  name="password"
                  style={{opacity:0.7}}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />

                <div className="d-flex justify-content-between mx-1 mb-4">
                  <NavLink to="/register">New here?</NavLink>
                </div>

                <Button variant="outline-primary" className="mb-4 w-100" onClick={loginuser}>
                  Sign in
                </Button>
                <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />

              </MDBCardBody>
            </MDBCol>
          </MDBRow>
      </MDBContainer>
      </div>
    </div>
  );
};

export default Login;
