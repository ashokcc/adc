import React from "react";
import { Link } from "react-router-dom";

const LinkComponent = ({ to = "/", name }) => {
  return (
    <Link to={to} color="error" underline="hover">
      {name}
    </Link>
  );
};

export default LinkComponent;
