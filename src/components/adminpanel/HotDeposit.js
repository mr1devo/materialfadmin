import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';



function preventDefault(event) {
  event.preventDefault('/RestraView');
}



export default function HotDeposit() {
  return (
    <React.Fragment>
      <Title>Recent Added Hotels</Title>
      <Typography component="p" variant="h4">
        HOTELS
      </Typography>
      <div>
        <Link color="primary" href="HotelView">
          View Hotels
        </Link>
      </div>
    </React.Fragment>
    
  );
 
}


