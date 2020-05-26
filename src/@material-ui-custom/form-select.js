import React from "react";
import { Select, MenuItem } from "@material-ui/core";

const MoreSelect = (props) => {
  return (
    <Select {...props}>
      {props.options &&
        props.options.map((item, index) => {
          return (
            <MenuItem key={index} value={item} label={item}>
              {item.name}
            </MenuItem>
          );
        })}
    </Select>
  );
};

export default MoreSelect;
