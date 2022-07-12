import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import SendIcon from "@material-ui/icons/Send";



const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#233",
    height: "100vh",
  },
  heading: {
    color: "tomato",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "fixed",
  },
  input: {
    color: "#fff",
  },
  button: {
    marginTop: "1rem",
    color: "tomato",
    borderColor: "tan",
  },
  field: {
    margin: "1rem 0rem",
  },
}));



function sendEmail(e) {
  e.preventDefault();
  e.target.reset();
  emailjs.sendForm('service_7a18tuc', 'template_bgvseof', e.target, 'user_kupP9f9GMYQtUTPx9tBVq')
  .then((result) => {
  console.log(result.text);
  }, (error) => {
  console.log(error.text);
  });
  }

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "tan",
      },
      "&:hover fieldset": {
        borderColor: "tan",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "tan",
      },
    },
  },
})(TextField);


const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer} position="header">
      <Grid container justify="center">
        <Box component="form" className={classes.form} >
          <Typography variant="h5" className={classes.heading}>
            Send me a message!
          </Typography>
          <form onSubmit={sendEmail}>
                      <InputField
                            className="form"
                            type="text" placeholder="i.e Samuel Iradukunda" name="name"
                            fullWidth={true}
                            variant = "outlined"
                            inputProps = {{ className: classes.input }}
                            label = "Your Name"
                      />

                        <InputField 
                            className="form"
                            type="text" placeholder="i.e iradukuunda@gmail.com" name="email"
                            fullWidth={true}
                            variant = "outlined"
                            inputProps = {{ className: classes.input }}
                            label = "Email"

                        />
                        <InputField 
                            className="form"
                            type="text" placeholder="i.e Meeting" name="subject"
                            fullWidth={true}
                            variant = "outlined"
                            inputProps = {{ className: classes.input }}
                            label = "Subject"
                        />
                        <InputField 
                            className="form"
                            placeholder="i.e Let's chat sometime"
                            name="message"
                            fullWidth={true}
                            variant = "outlined"
                            inputProps = {{ className: classes.input }}
                            label = "Message"
                        />
                        <Button 
                            endIcon={<SendIcon />}
                            color = "secondary"
                            title = "Contact me"
                            type="submit"
                            fullWidth={true}
                            variant = "outlined"
                            label = "Submit"
                            inputProps = {classes.button }
                        />
                    
                </form>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
