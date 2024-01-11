import { Box } from "@mui/material";
import React from "react";


export const ShortButton = (
  {
  connectFunction,
  buttonIcon
  }: any) => {
  return (
    <Box
      onClick={connectFunction()}
      sx={{
        cursor: "pointer",
        height: "40px",
        width: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid #dadce0"

      }}
    >
      <img src={buttonIcon} height={"25px"} width={"25px"} alt={"icon"}/>
    </Box>
  );
}