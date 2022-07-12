import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



const useStyles = makeStyles({
  bottomNavContainer: {
    background: "transparent",
  },

  root1:{
    paddingRight: 100,
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "x-large",
      },
    },
  },
  root: {
    justifyContent: 'center',
    paddingLeft: 100,
    "& .MuiSvgIcon-root": {
      fill: "tan",
      "&:hover": {
        fill: "tomato",
        fontSize: "x-large",
      },
    },
  },
});
//to redicted link to a new tab
const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}
const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction icon={<LinkedInIcon fontSize= "large"/>}  onClick={() => openInNewTab('https://www.linkedin.com/in/samuel-iradukunda-77aa90198/')} className={classes.root}/>
      <BottomNavigationAction icon={<GitHubIcon fontSize= "large"/>} onClick={() => openInNewTab('https://github.com/iradukundas')} className={classes.root1} />
    </BottomNavigation>
  );

};
export default Footer;
