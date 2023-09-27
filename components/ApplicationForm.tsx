"use client";

import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ApplicationForm = () => {
  const [vacation, setVacation] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setVacation(event.target.value);
  };
  console.log(vacation);

  return (
    <FormControl sx={{ m: 1, minWidth: 320 }}>
      <InputLabel id="demo-simple-select-autowidth-label">Vacation</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={vacation}
        onChange={handleChange}
        autoWidth
        label="Vacation"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Twenty</MenuItem>
        <MenuItem value={21}>Twenty one</MenuItem>
        <MenuItem value={22}>Twenty one and a half</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ApplicationForm;
