import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Added Places</Title>
      <Typography component="p" variant="h4">
        PLACES
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Places
        </Link>
      </div>
    </React.Fragment>
    
  );
}
