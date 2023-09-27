"use client";
import React from "react";
import { ThemeProvider, Typography, Button } from "@mui/material";
import plusIcon from "../public/assets/plus-icon.svg";

import Image from "next/image";
import { createTheme } from "@mui/material/styles";
import ApplicationForm from "@/components/ApplicationForm";

export default function Home() {
  const theme = createTheme();

  theme.typography.subtitle1 = {
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "red",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
  };

  theme.typography.h1 = {
    color: "#2C72E9",
    fontSize: "5rem",
    fontWeight: "800",
    marginBottom: "34px",
  };

  theme.typography.button = {
    background: "red",
    color: "white",
    padding: "12px",
    borderRadius: "12px",
  };

  return (
    <main className="overflow-hidden">
      <ThemeProvider theme={theme}>
        <Typography variant="h1" gutterBottom>
          H1 Heading
        </Typography>
        <Typography variant="subtitle1">Subtitle 1</Typography>
        <Typography variant="button">Click me!</Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          obcaecati!
        </Typography>
      </ThemeProvider>

      <Button className="bg-blue-500 hover:bg-red-300 text-black outline-4 outline-red-800 border-red-800">
        {" "}
        <Image src={plusIcon} alt="" /> Click me now
      </Button>

      <ApplicationForm />
    </main>
  );
}
