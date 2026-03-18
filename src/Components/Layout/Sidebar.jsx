import React from 'react'
import { NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <aside className={isOpen ? "mobileShow" : ""}>
        <div className="sidebar-div flexClass">
          <div className="logo flexClass">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              <img src={logo} alt="logo" />
              <h1>Creative Noise Studio</h1>
            </NavLink>
          </div>
        </div>

        <div className="sidebar-div flexClass">
          <ol className="flexClass">

            <li>
              <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-solid fa-table-list"></i> Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/category" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-solid fa-layer-group"></i> Category
              </NavLink>
            </li>

            <li>
              <NavLink to="/products" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-brands fa-notion"></i> Products
              </NavLink>
            </li>

            <li>
              <NavLink to="/blog" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-brands fa-blogger"></i> Blog
              </NavLink>
            </li>

            <li>
              <NavLink to="/bookings" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-regular fa-calendar"></i> Bookings
              </NavLink>
            </li>

            <li>
              <NavLink to="/orders" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-solid fa-cart-shopping"></i> Orders
              </NavLink>
            </li>

            <li>
              <NavLink to="/settings" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                <i className="fa-solid fa-gear"></i> Settings
              </NavLink>
            </li>

          </ol>
        </div>

        <div className="sidebar-div flexClass">
          <div className="admin-img flexClass">
            <div className="img"></div>
            <h3>
              Admin
              <p>admin@example.com</p>
            </h3>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar