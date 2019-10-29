import React from "react";
import GithubUser from "./GithubUser";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";



class GithubUserList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="user-list">
          <Grid container>
            {this.props.users.map((element, index) => {
              if (element.name.toLowerCase().includes(this.props.search.toLowerCase())) {
                return (
                  <Grid key={index} item xs>
                    <GithubUser key={element.id} user={element} />
                  </Grid>
                );
              }
            })}
          </Grid>
        </div>
      </>
    );
  }
}

export default GithubUserList;
