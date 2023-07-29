import React from 'react';
import CategoriesHeader from '../components/Categories-pages/CategoriesHeader';
import { Outlet } from "react-router-dom";

const Categories = () => {
  return (
    <>
    <CategoriesHeader />
    <Outlet />

    </>
  )
}

export default Categories
