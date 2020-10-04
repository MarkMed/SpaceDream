import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class Clock extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          time: new Date().toLocaleString()
      };
  }
  componentDidMount() {
      this.intervalID = setInterval(
          () => this.tick(),
          1000
      );
  }
  componentWillUnmount() {
      clearInterval(this.intervalID);
  }
  tick() {
      this.setState({
          time: new Date().toLocaleString()
      });
  }
  render() {
      return (
          <p className="App-clock">
              <b>{this.state.time}</b>
          </p>
      );
  }
}

const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

function Footer() {
  return (
    <FooterStyle>
      <Typography variant="body2" color="textSecondary" align="center" style={{ color: '#c9c9c9' }}>
        
        {'Copyright © SpaceDream '}
        {new Date().getFullYear()}
        <Clock />
      </Typography>
    </FooterStyle>
  );
}
export default Footer;
