import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BaseSection = (props: any) => {
  return (
    <Card sx={{ width: '100%', textAlign: 'center' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props?.instructions}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BaseSection;