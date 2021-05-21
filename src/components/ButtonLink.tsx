import { Link as RouterLink } from "react-router-dom";
import { Button, Link as MaterialLink } from "@material-ui/core";
import React from "react";

interface Props{
  path: string;
  label: string;
}

const BtnLink: React.FC<Props> = ({path, label}: Props) => {
  return (
    <MaterialLink component={RouterLink} to='/page1'>
      <Button variant="contained" color="primary">
        page1
      </Button>
    </MaterialLink>
  );
};

export default BtnLink;
