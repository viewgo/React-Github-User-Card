import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
   
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));




export default function SearchForm(props) {
  
    const classes = useStyles();

    return (
      <>
      {/* <div className="search">
      <form className="search-form">
        <input
          type="text"
          onChange={props.searchInputChange}
          value={props.search}
          name="name"
          tabIndex="0"
          placeholder="Search By Name"
          autoComplete="off"
        />
      </form> */}


      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Search"
          margin="normal"
          type="text"
          onChange={props.searchInputChange}
          value={props.search}
          name="name"
          tabIndex="0"
          placeholder="Search By Name"
          autoComplete="off"
        />
        </form>
{/* 
      </div> */}
      </>
    );
  }

