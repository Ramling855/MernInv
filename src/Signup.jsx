import * as React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";



import Alert from '@mui/material/Alert';

import axios from 'axios'
import { useState } from 'react';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();




export default function SignUp() {
  const [success,setSuccess]=useState(false)

  const[select,setSelect]=useState("")

  const handlechnage=(event)=>{
    setSelect(event.target.value)

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     
    var detail= (
      {
        first: data.get("first"),
        last: data.get("last"),
                     
        email: data.get("email"),
       password: data.get("password"),
       role: select,
       address: data.get("address"),
      }
     
     ) 
           
 
    console.log(detail)      
    axios.post("http://localhost:8080/auth/signup", detail).then(result=>{
       
     
      
       if(result.data.message=="Successfully registered"){

         setSuccess("success")
        
       }

       else{
         setSuccess("failed")
         

       }

     }).catch(err=>{
         console.log(err)
     })
    

 }
                    
   

    
   

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          {
          success=="success"? <Alert severity="success" >Successfully Registered</Alert>:""
          
        } 

        {
          success=="failed" ?<Alert severity="error" >Email already registered</Alert>:"" 
        }
          
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="first"
                  required
                  fullWidth
                  id="first"
                  label="First"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="last"
                  label="Last"
                  name="last"
                  autoComplete="last"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  label="address"
                  name="address"
                  autoComplete="address"
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="role"
                  label="role"
                  name="role"
                  autoComplete="role"
                />
              </Grid> */}
              <Grid item xs={12} sm={6}>
             
              <FormControl sx={{ m: 1, minWidth: 100 }} size="medium">
      <InputLabel id="demo-select-small">Role</InputLabel>
      <Select
         labelId="demo-simple-select-autowidth-label"
         id="demo-simple-select-autowidth"
        autoWidth
        value={select}
        label="role"
        onChange={handlechnage}
      >
        <MenuItem value="">
        </MenuItem>
        <MenuItem value={"admin"}>admin</MenuItem>
        <MenuItem value={"user"}>user</MenuItem>
      </Select>
    </FormControl>
         </Grid>
              
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
