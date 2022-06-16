import { TextField, Button }  from '@mui/material';
import { useEffect, useState } from 'react';
import {useNavigate } from 'react-router-dom';
import React, {Component} from 'react'

const Login = (props) => {
  const [state,setState] = useState({username: "",password: ""});

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(state);
    if(!state.username) {
      alert("Please enter the Username");
    }
    else if(!state.password) {
      alert("Please enter the Password");
    }
    else {
      const url = "user/verifyUser";
      const option = {method: "POST", headers: {'Content-Type': 'application/json'}, body: JSON.stringify(state)};
      fetch(url,option)
      .then(response => response.json())
      .then(data => {
        if(data.success) {
          alert(data.message);
          navigate("/");
        } else {
          alert(data.message);
          setState({...state,password: ""});
        } 
      });
    }
    

  }

  const changeHandler = (event) => {
    setState({...state,[event.target.name]: event.target.value});
  }

  return (
    <div id='loginform' style={{width: "100vw", height:"25vh",display: "flex", justifyContent: "center", alignItems: "center"}}>
      <form style={{display: "flex", flexDirection: "column",width: "400px", maxWidth: "500px", margin: "0 auto", background: 'trasnparent', padding: "20px", marginTop: "30px"}} onSubmit={submitHandler}>
        <TextField label="Username" name="username" variant="filled" value={state.username} onChange={changeHandler} required />
        <TextField label="Password" type="password" name="password" variant="filled" value={state.password} onChange={changeHandler} required />
        <br/>
        <div style={{width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button type="submit" variant="contained" color="primary">Enter</Button>
        </div>
      </form>
    </div>
  )
}

export default Login;