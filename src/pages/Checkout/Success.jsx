import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <>
      <h1>Payment Successfull ✔</h1>
      <h3>Your order will be shipped in the next few days</h3>
      <Link to="/">⬅ Back to Homepage</Link>
    </>
  );
};

export default Success;
