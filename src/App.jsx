import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Dashboard from './Components/Webpage/Dashboard';
import Category from './Components/Webpage/Category'
import Product from './Components/Webpage/Product'
import Blog from './Components/Webpage/Blog'
import Bookings from './Components/Webpage/Booking'
import Order from './Components/Webpage/Order'
import Setting from './Components/Webpage/Setting'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="products" element={<Product />} />
          <Route path="blog" element={<Blog />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="orders" element={<Order />} />
          <Route path="settings" element={<Setting />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;