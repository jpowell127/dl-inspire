import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

const buttonStyle = {
  margin: 20
};

const paperStyle = {
  height: "10%",
  width: "100%",
  textAlign: "center",
  display: "block"
};

const Search = () => (
  <Paper style={paperStyle} zDepth={5} rounded={false}>
    <TextField id="text-field-default" hintText="Search for Behance Users" />
    <RaisedButton label="Search" secondary={true} style={buttonStyle} />
  </Paper>
);

export default Search;
