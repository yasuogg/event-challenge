"use client";
import React from "react";
import { UserProvider } from "../lib/authContext";

const Layout = ({ user, children }) => {
  return <UserProvider value={user}>{children}</UserProvider>;
};

export default Layout;
