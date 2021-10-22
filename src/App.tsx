import React from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import PostsList from "./containers/PostsList";

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
      <PostsList/>
  </React.Fragment>
  );
}

export default App;
