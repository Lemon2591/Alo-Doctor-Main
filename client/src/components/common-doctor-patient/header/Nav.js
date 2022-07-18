import React, { useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { BiLogIn } from "react-icons/bi";
import "./Nav.css";
import logo from "../../../assets/img/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="top-navbar">
        <div className="top-bar">
          <ul className="top-bar-list">
            <li className="top-bar-list-item1">
              <a className="" href='tel:"0868158218'>
                <i>
                  {" "}
                  <FiPhoneCall />{" "}
                </i>
                Hỗ trợ chuyên môn: +84 - 868 158 218
              </a>
            </li>
            <li className="top-bar-list-item2">
              <a className="" href="tel:0868158218">
                <i>
                  {" "}
                  <FiPhoneCall />{" "}
                </i>
                Hỗ trợ kỹ thuật: +84 - 868 158 218
              </a>
            </li>
            <li className="top-bar-list-log-in">
              <NavLink className="top-bar-list-log-in-item" to="./Login">
                <i>
                  {" "}
                  <BiLogIn />
                </i>
                Đăng Nhập
              </NavLink>
            </li>
          </ul>
        </div>

        {show ? <div className="bg-menu-mobie"></div> : null}

        {show ? (
          <div className="list-menu-mobie" id="menu-mobile">
            <div className="list-menu-mobie-container">
              <i onClick={() => setShow(false)}>
                <AiOutlineClose />
              </i>
              <ul className="d-flex list-login-menu">
                <i>
                  <AiOutlineLogin />
                </i>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/Login">
                    ĐĂNG NHẬP
                  </NavLink>
                </li>
              </ul>

              <ul className="list-nav-link-menu">
                <li onClick={() => setShow(false)} className="">
                  <a className="nav-link-mobie" href="/">
                    TRANG CHỦ
                  </a>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/Intro">
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/Procedure">
                    QUY TRÌNH
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/UsingInstructions">
                    HƯỚNG DẪN SỬ DỤNG
                  </NavLink>
                </li>
                <li onClick={() => setShow(false)} className="">
                  <NavLink className="nav-link-mobie" to="/Contact">
                    LIÊN HỆ
                  </NavLink>
                </li>
              </ul>

              <ul className="list-nav-link-menu">
                <li className="">Hotline: 1900 100</li>
                <li className="">Email: cnnhok6262@gmailcom</li>
              </ul>
            </div>
          </div>
        ) : null}

        <div className="nav-container">
          <div className="nav-content">
            <div className="nav-mobile-icon">
              <i onClick={() => setShow(true)}>
                <AiOutlineMenu />
              </i>
            </div>
            <div className="nav-logo">
              <a href="/">
                <img src={logo}></img>
              </a>
            </div>
            <div className="nav-list-link">
              <ul className="list-item-all">
                <li className="nav-item  active">
                  <NavLink className="nav-item-link active" to="/">
                    TRANG CHỦ
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item-link " to="/Intro">
                    GIỚI THIỆU
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item-link" to="/Procedure">
                    QUY TRÌNH
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-item-link" to="/UsingInstructions">
                    HƯỚNG DẪN SỬ DỤNG
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-item-link" to="/Contact">
                    LIÊN HỆ
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="nav-btn">
              <NavLink className="nav-btn-click" to="./Register">
                <button className="">ĐĂNG KÝ NGAY</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
