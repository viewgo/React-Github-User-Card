import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles(theme => ({
  card: {
    width: 345,
    margin: 10,
    marginTop: 50

  },
  
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    marginTop: 25
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const user = props.user;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
        <a href={user.html_url} style={{textDecoration: "none", color: "inherit"}} target="_blank">
      <CardActionArea className={classes.cardactionarea}>
      <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="256"
          image={user.avatar_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography variant="h5" component="h2">
            {user.name}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="h3">
            {user.login}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {user.bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      </a>

      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent align="left">
          <Typography paragraph align="center">
            {user.location}
          </Typography>
          <Typography paragraph>Followers: {user.followers}</Typography>
          <Typography paragraph>Following: {user.following}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
