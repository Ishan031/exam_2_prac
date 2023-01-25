import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const ViewBooks = () => {
  const [users, setUser] = useState([]);
  let history = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const getcookie = cookies.get("jwtoken");
    // console.log(getcookie);
    if(getcookie){
      const response = await axios.get("http://localhost:2000/book");
      console.log(response);
      setUser(response.data);
  }else{
    // window.alert("cookie not present")
    history("/login")
  };
  }
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:2000/delete-book/${id}`);
      getUsers();
      window.alert("User Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async (e) => {
    cookies.remove("jwtoken");
    localStorage.removeItem("token")
    history("/login")
  };



  return (
    <>
    <div>
    <nav className="site-nav js-site-navbar mb-5 site-navbar-target" style={{backgroundColor:"black" ,marginTop:-10}}>
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
              <a href="/addbook" className="nav-link">
                ADD BOOKS
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
  </div>
  <body>  
      <div className="columns mt-5">
        <div className="column is-half">
          <Link to="/addbook" className="button is-success">
            <button className="btn btn-primary" style={{marginTop:50}}>Add New</button>
          </Link>
          </div>
      </div>
          <table className="table is-striped is-fullwidth mt-2">
            <thead>
              <tr>
                <th>ID</th>
                <th>Book name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Book Image</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>  
                  <td>{user.name}</td>
                  <td>{user.author}</td>
                  <td>{user.price}</td>
                  <td>{user.quantity}</td>
                  <td>{user.description}</td>
                  <td><img src={user.image} style={{height:90}} /></td>
                  <td>
                    <Link
                      to={`/update-book/${user._id}`}
                      className="btn btn-success"
                      style={{ marginRight: 20 }}
                    >
                    <i class="material-icons"><span style={{marginTop:0}}>visibility</span></i>
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      className="btn btn-danger"
                       // style={{ paddi , marginRight:230}}
                       >
                      <i class="material-icons"> <span>delete</span> </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>  
              </body>
    </>
  );
};

export default ViewBooks;
