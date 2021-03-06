import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/discord.jpg";
import project2 from "../images/iradukunda.jpg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = 
[
  {
    name: "TFT Discord Bot",
    description: `Designed and deployed data retrieving bot for favorite game on the Discord platform. esigned and deployed data retrieving bot for favorite game on the Discord platform. `,
    image: project1,
  },
  {
    name: "Iradukunda.net",
    description: `Designed the website’s front UI. Programmed the portfolio using React, HTML, and CSS. Deployed the website using GitHub Pages  `,
    image: project2,
  }
]
  /*
  ,
 
  {
    name: "Project 3",
    description: `Coming soon`,
    image: project3,
  },
  {
    name: "Project 4",
    description: `Coming soon`,
    image: project4,
  },
  {
    name: "Project 5",
    description: `Coming soon`,
    image: project5,
  },
  {
    name: "Project 6",
    description: `Coming soon`,
    image: project6,
  },
];
*/
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => openInNewTab('https://www.github.com/iradukundas')} >
                  Github
                </Button>
    
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
