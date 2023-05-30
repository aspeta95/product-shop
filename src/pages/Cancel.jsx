import React from "react";
import { Link } from "react-router-dom";
const Cancel = () => {
  return (
    <>
      <h1>Payment Cancelled ❌</h1>
      <h3>User cancelled order manually</h3>
      <Link to="/">⬅ Back to Homepage</Link>
    </>
  );
};

export default Cancel;
