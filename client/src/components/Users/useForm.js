import { useFormik } from "formik";
import { formSchema } from "./schema/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
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
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
  const history = useNavigate();
  // const [user,setUser] = useState({
  //   name : "" , email : "" , password : "" , cpassword : "" ,
  // })
  //  console.log(user);
  // const [file, setFile] = useState("");
  // const onInputChange = (e) =>{
  //   setFile(e.target.files[0])
  //   console.log(file);
  // }
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      username : "",
      email: "",
      number : "",
      password: "",
      cpassword: "",
    },
    validationSchema: formSchema,
    
    onSubmit: async (values, actions) => {
        let formdata = new FormData()
  formdata.append('name',values.name)
  formdata.append('username',values.username)
  formdata.append('email',values.email)
  formdata.append('number',values.number)
  formdata.append('password',values.password)
  formdata.append('cpassword' , values.cpassword)
  // formdata.append('photo' , file)
      try {
        let url = "http://localhost:2000/register";
        await axios
          .post(url, formdata, {
            headers: { Authorization: localStorage.getItem("token")
          },
          })
          .then((data) => {
            // console.log(data.data.message);
            if (data.status === 200) {
              toast.success("User Registered, please login now");
              console.log(data);
              setTimeout(() => {
                history("/login");
              }, 2000);
            }
          });
      } catch (err) {
        console.log("error  catch ");
        // window.alert("failed")
        toast.error("Email already exists");
        actions.resetForm();
      }
    },
  });

  const downkey = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "-" , "=" , "/" , "+" , "." , "," , "[" , "]" , "{" , "}" , "'" , ";" , "_" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "(" , ")" , ":" , ">" , "<" , "?" , "|" ,"\"","~" , "`"];
 
  const emailverify = ["+" , "=" , ")" , "(" , "*" , "&" , "%" , "#" , "!" , "^" , "$"]
  
  const numberkey = ["+" , "=" , ")" , "(" , "*" , "&" , "%" , "#" , "!" , "^" , "$" , "A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q" , "R" , "S" , "T" , "U" , "V", "W" , "X" , "Y", "Z" , "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" ,"j" ,"k" , "l" ,"m" ,"n" , "o" , "p" , "q" , "r" , "s" , "t" ,"u" , "v","w" , "x","y","z", "-" , "=" , "/" , "+" , "." , "," , "[" , "]" , "{" , "}" , "'" , ";" , "_" , "`" , "!" , "@" , "#" , "$" , "%" , "^" , "&" , "(" , ")" , ":" , ">" , "<" , "?" , "|" ,"\"" , "`" , "~" ] 

  const [show, setShow] = useState(false);

  const showpassword = () => {
    setShow(!show);
  };


  return (  
    <div>
      <MDBContainer fluid>
        {/* <form onSubmit={handleSubmit}>   */}
          <MDBCard className="text-black m-5"  style={{ borderRadius: "25px" }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol
                  md="10"
                  lg="6"
                  className="order-2 order-lg-1 d-flex flex-column align-items-center"
                >
                  <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign up
                  </p>

                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput onKeyDown={(e) =>
                    downkey.includes(e.key) && e.preventDefault()
                  }
                      placeholder="Your name"
                      id="form1"
                      name="name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      className={errors.name ? "input-error" : ""}
                    />
                  </div>
                  {errors.name && <p className="error">{errors.name}</p>}
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      placeholder="Your username"
                      id="form1"
                      name="username"
                      value={values.username}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      className={errors.username ? "input-error" : ""}
                    />
                  </div>
                  {errors.username && <p className="error">{errors.username}</p>}
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput 
                    onKeyDown={(e) =>
                    numberkey.includes(e.key) && e.preventDefault()
                  }
                      placeholder="Your Phone No"
                      id="form1"
                      name="number"
                      value={values.number}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="text"
                      className={errors.number ? "input-error" : ""}
                    />
                  </div>
                  {errors.number && <p className="errorn">{errors.number}</p>}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput onKeyDown={(e) =>
                    emailverify.includes(e.key) && e.preventDefault()
                    }
                      placeholder="Your email"
                      id="form2"
                      name="email"
                      value={values.email}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      className={errors.email ? "input-error" : ""}
                    />
                  </div>
                  {errors.email && <p className="errore">{errors.email}</p>}

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      placeholder="Password"
                     type= {show ? "text" : "password"}
                      id="form3"
                      name="password"
                      value={values.password}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={errors.password ? "input-error" : ""}
                    />
                  </div>
                  {errors.password && (
                    <p className="errorp">{errors.password}</p>
                  )}
<div>
<Form.Group className="mb-3" style={{marginLeft:-100}}>
        <Form.Check type="checkbox"  className="box" label="Click me to see password" onClick={showpassword}/>
      </Form.Group>
</div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput
                      placeholder="Repeat your password"
                      id="form4"
                      name="cpassword"
                      value={values.cpassword}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="password"
                      className={errors.cpassword ? "input-error" : ""}
                    />
                  </div>
                  {errors.cpassword && (
                    <p className="errorcp">{errors.cpassword}</p>
                  )}
                  {/* <div>
                    <input type="file" name="photo" 
                    onChange={onInputChange}/>
                  </div> */}
                  <NavLink to="/login" className="mb-4">
                    Already a user?
                  </NavLink>
                  <Button
                  id="regbtn"
                  onClick={handleSubmit}
                >
                  Register
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
        {/* </form> */}
      </MDBContainer>
    </div>
  );
};
export default Register;
