import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';



function preventDefault(event) {
  event.preventDefault('/PlaceView');
}



export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Added Places</Title>
      <Typography component="p" variant="h4">
        PLACES
      </Typography>
      <div>
        <Link color="primary" href="PlaceView" >
          View places
        </Link>
      </div>
    </React.Fragment>
    
  );
 
}


