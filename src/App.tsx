import React from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import PostsList from "./containers/PostsList";

function App() {
  return (
    <React.Fragment>
    <CssBaseline />
    <BrowserRouter>
      <PostsList/>
    </BrowserRouter>
  </React.Fragment>
  );
}

export default App;
