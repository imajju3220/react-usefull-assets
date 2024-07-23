/** @format */

import React from "react";
import MenuItem from "./menuItem";

export default function MenuList({ list = [] }) {
  console.log('list', list);
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map(listItem => <MenuItem item={listItem} />)
        : null}
    </ul>
  );
}
