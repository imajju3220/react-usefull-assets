/** @format */

import { Children } from "react";

export const menus = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Profile",
    to: "/profile",
    children: [
      {
        label: "Details",
        to: "details",
        children: [
          {
            label: "Location",
            to: "location",
            children:[
                {
                    label:"city",
                    to:"city"
                }
            ]
          },
        ],
      },
    ],
  },
  {
    label: "setting",
    to: "/setting",
    children: [
      {
        label: "Account",
        to: "account",
      },
      {
        label: "Security",
        to: "security",
        children: [
          {
            label: "Login",
            to: "login",
          },
          {
            label: "Register",
            to: "register",
          },
        ],
      },
    ],
  },
];

export default menus;
