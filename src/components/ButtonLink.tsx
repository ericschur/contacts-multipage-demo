import { NavLink } from "react-router-dom";
import {Button} from "@material-ui/core";
import React from "react";

interface Props{
    path:string;
    label:string;
}

const BtnLink: React.FC<Props> = ({path, label}: Props) => {
  return (
    <Button variant="contained" color="primary">
      <NavLink to="/page1">page1</NavLink>
    </Button>
  );
};

export default BtnLink;
