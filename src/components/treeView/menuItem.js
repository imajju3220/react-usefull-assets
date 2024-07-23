/** @format */

import React, { useState } from "react";
import MenuList from "./menuList";

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren]=useState({}) 
    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel] 
        })
    }
    console.log("displayCurrentChildren", displayCurrentChildren);
  return (
    <li>
      <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
      <p>{item.label}</p>
      {
        item && item.children && item.children.length ? <span style={{fontWeight:'bold', padding:'2px 8px'}} onClick={()=>handleToggleChildren(item.label)}>
            {displayCurrentChildren[item.label]? '-' : '+'}
        </span> : null
      }
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
