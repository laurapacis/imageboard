import React, {useState, useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

import cherub from './images/Cherub.jpg';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import useStyles from "./styles";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Imageboard
        </Typography>
        <img className={classes.image} src={cherub} alt="cherub" height="60"/>
      </AppBar>

      <Grow in>

        <Container>
          
          <Grid className={classes.mainContainer} container direction="column-reverse" justify="space-between" alignItems="stretch" spacing={3}>
            
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            
            <Grid item xz={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App;
