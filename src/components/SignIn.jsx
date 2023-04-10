import React from 'react';
import { Grid, Paper, Typography, Button, FormControlLabel, TextField, Checkbox } from '@mui/material';
import {Link} from 'react-router-dom';

const SignIn = () => {
    const [checked, setChecked] = React.useState(true);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <div style={{ display: 'grid', height: '100vh', placeItems: 'center', backgroundImage: 'linear-gradient(#FF7F50, #fff6e4, #006400)'}}>
        <Paper sx={{ padding: '30px', border: '5px solid green', borderRadius: '20px' }}>
          <Grid
            container
            spacing={3}
            direction={'column'}
            justify={'center'}
            alignItems={'center'}
          >
            <Grid item xs={12}>
              <TextField label="Username"></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Password" type={'password'}></TextField>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    label={'Keep me logged in'}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                }
                label="Keep me logged in"
              />
            </Grid>
          </Grid>  
          <Grid container spacing={3} style={{ paddingTop: '24px' }}>
          <Grid item xs={12}>
            <Grid container xs={12} justifyContent="space-around" spacing={1}>
                <Grid item xs="auto">
                  <Button style={{ backgroundColor: 'green', borderRadius: '8px' }} variant="contained"> Login </Button>
                </Grid>
                <Grid item xs="auto">
                  <Button style={{ backgroundColor: 'white', color: 'green', border: '1px solid green', borderRadius: '8px' }} variant="contained"> Sign up </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs>
                  <Link>
                    <Typography variant="body2">Forgotten Password?</Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>   
        </Paper>
      </div>
    );
  };
  
  export default SignIn;