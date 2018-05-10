import React from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/Search";

const App = () => (
  <MuiThemeProvider>
    <Search />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
