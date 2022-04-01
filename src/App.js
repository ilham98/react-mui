import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ProfileDetail from "./components/ProfileDetail";
import ProfileForm from "./components/ProfileForm";

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <ProfileDetail />
        <ProfileForm />
      </Grid>
    </Box>
  );
}
