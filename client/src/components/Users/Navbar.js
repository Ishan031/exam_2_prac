import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import Login from "./Login";

const Navbar = () => {
  const cookies = new Cookies();
  
  const handleLogout = async (e) => {
    cookies.remove("jwtoken");
    localStorage.removeItem("token")
  };

  return (
    <>
      <div>
        <nav className="site-nav js-site-navbar mb-5 site-navbar-target">
          <div className="container">
            <div className="site-navigation text-center">
              <a
                href="/index.html"
                className="d-block text-center float-left logo"
              >
                I
              </a>
              <ul className="js-clone-nav ml-0 pl-0 d-none d-lg-inline-block site-menu mx-auto text-center">
                <li className="active">
                  <a href="/#home-section" className="nav-link">
                    Home
                  </a>
                </li>
                <li className="has-children">
                  <a href="/" className="nav-link">
                    Dropdown
                  </a>
                  <ul className="dropdown">
                    <li>
                      <a href="/#testimonials-section" className="nav-link">
                        Testimonials
                      </a>
                    </li>
                    <li className="has-children">
                      <a href="/#">Menu Two</a>
                      <ul className="dropdown">
                        <li>
                          <a href="/#" className="nav-link">
                            Sub Menu One
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="nav-link">
                            Sub Menu Two
                          </a>
                        </li>
                        <li>
                          <a href="/#" className="nav-link">
                            Sub Menu Three
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="/#" className="nav-link">
                        Menu Three
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/#about-section" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#portfolio-section" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="/#services-section" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/#resume-section" className="nav-link">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="/#blog-section" className="nav-link">
                    Blog
                  </a>
                </li>
              </ul>
              <a
                href="/#"
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
    </>
  );
};

export default Navbar;
