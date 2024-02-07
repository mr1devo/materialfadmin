import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';



function preventDefault(event) {
  event.preventDefault('/RestraView');
}



export default function ResDeposit() {
  return (
    <React.Fragment>
      <Title>Recent Added Restaurants</Title>
      <Typography component="p" variant="h4">
        RESTAURANTS
      </Typography>
      <div>
        <Link href="RestraView" color="primary" >
          View Restaurants
        </Link>
      </div>
    </React.Fragment>
    
  );
 
}


