import React from "react";
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
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useEffect } from "react";
const Contact = () => {

  useEffect(() => {
    loginverfy();
  }, []);

  const loginverfy = () => {
    if (!localStorage.getItem("token")) {
      history("/login");
    }
  };
  
  let history = useNavigate();
  const cookies = new Cookies();

  const handleLogout = async (e) => {
    cookies.remove("jwtoken");
    localStorage.removeItem("token")
    history("/login")
  };
  return (
    <>
         <nav className="site-nav js-site-navbar mb-5 site-navbar-target" style={{backgroundColor:"black" ,marginTop:-50}}>
      <div className="container">
        <div className="site-navigation text-center">
          <a
            href="/home"
            className="d-block text-center float-left logo"
          >
            I
          </a>
          <ul className="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
            <li className="active">
              <a href="/home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="nav-link">
                User List
              </a>
            </li>
            <li>
              <a href="/register" className="nav-link">
                Register
              </a>
            </li>
            <li>
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li>
              <a href="/addbook" className="nav-link">
                ADD BOOKS
              </a>
            </li>
            <li>
              <a href="/viewbook" className="nav-link">
                VIEW BOOKS
              </a>
            </li>
            <li>
              <a className="nav-link" id="logout" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </ul>
          <a
            href="/home"
            className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block light d-lg-none"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
      </div>
    </nav>
      <MDBContainer fluid>
        <MDBCard className="text-black m-5" style={{ borderRadius: "25px"}}>
          <MDBCardBody style={{marginTop:90}}>
            <MDBRow>
              <MDBCol
                md="10"
                lg="6"
                className="order-2 order-lg-1 d-flex flex-column align-items-center"
              >
                <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Get In Touch
                </p>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size="lg" />
                  <MDBInput
                    label="Your Name"
                    id="form1"
                    type="text"
                    className="w-100"
                  />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size="lg" />
                  <MDBInput label="Your Email" id="form2" type="email" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size="lg" />
                  <MDBInput label="Phone No" id="form3" type="password" />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size="lg" />
                  <MDBInput label="Message" id="form4" type="textarea" />
                </div>

                <MDBBtn className="mb-4" size="lg">
                  Send
                </MDBBtn>
              </MDBCol>

              <MDBCol
                md="10"
                lg="6"
                className="order-1 order-lg-2 d-flex align-items-center"
              >
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  fluid
                />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </>
  );
};

export default Contact;
