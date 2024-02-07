// Import the CSS file
import './Places.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Typography } from '@mui/material';

const Places = () => {
  var [inputs, setInputs] = useState({ "placename": '', "tsee": '', "location": '' });
  var [selectedimage, setSelectedimage] = useState(null);

  const navigate = useNavigate();
  const navigatetoHotel = () => {
    navigate('/Hotel');
  }

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
    console.log(inputs);
  }

  const handleimage = (event) => {
    const file = event.target.files[0];
    setSelectedimage(file);
    inputs.placephoto = file;
  }

  const savedata = () => {
    const formdata = new FormData();
    formdata.append('placename', inputs.placename);
    formdata.append('tsee', inputs.tsee);
    formdata.append('location', inputs.location);
    formdata.append('placephoto', selectedimage);

    fetch('http://localhost:4005/photonew', {
      method: 'post',
      body: formdata,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Place saved");
      })
      .catch((err) => {
        console.log("error");
      });
    //  navigate('/PlaceView')
  }

  return (
    <div className='p'>
      <Typography className='form' variant='h5'>Add Place</Typography><br></br>
      <TextField 
        id="outlined-basic"
        label="Places"
        variant="outlined"
        name="placename"
        value={inputs.placename}
        onChange={inputHandler}
      />
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Things to see"
        variant="outlined"
        name="tsee"
        value={inputs.tsee}
        onChange={inputHandler}
      />
      <br></br>
      <br></br>
      <input type="file" onChange={handleimage} />
      <br></br>
      <br></br>
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        name="location"
        value={inputs.location}
        onChange={inputHandler}
      />
      <br></br>
      <br></br>
      <Button
        variant='outlined'
        className='button'
        // color='success'
        onClick={() => { savedata(); navigatetoHotel() }}
      >
        NEXT
      </Button>
    </div>
  );
}

export default Places;