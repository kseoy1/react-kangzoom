import React from "react";
import { Container } from "@mui/material";
import Post from "../Post";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100px",
    fontSize: "48px",
    borderBottom: "2px solid #666",
    marginBottom: "24px",
  },
};

const Header = () => {
  return (
    <Container maxWidth="lg" style={styles.root}>
      <div></div>
      <div>kangzoom</div>
      <Post />
    </Container>
  );
};

export default Header;
