import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";

const style = {
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
    <TextField id="text-field-default" defaultValue="Search Behance" />
    <RaisedButton label="Search" secondary={true} style={style} />
  </Paper>
);

export default Search;
