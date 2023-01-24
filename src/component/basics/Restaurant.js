import React, { useState } from 'react';
import './style.css';
import Menu from './menuApi';
import MenuCard from '../MenuCard';
import Navbar from './Navbar';  

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  'All',
];
const Restaurant = () => {

  const [menuData,setMenuData]= useState(Menu);
  const [menuList,setMenuList]= useState(uniqueList);

  console.log(menuData);
  const filteritem= (category)=>{
    if(category=='All')
    {
      setMenuData(Menu);
      return;   
    }
    const updatedList =Menu.filter((curElem) =>{
      return curElem.category === category;
    });
    setMenuData(updatedList);
  }
  const stylee={
    fontSize : '40px',
    fontFamily: '"Cormorant Garamond", serif',
    fontWeight: '400'
  }
  return (
    <>
    <nav className='navbar'>
      <h1 style={stylee}>Bhavya ki rasoi</h1>
    </nav>
      <Navbar filteritem={filteritem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant
