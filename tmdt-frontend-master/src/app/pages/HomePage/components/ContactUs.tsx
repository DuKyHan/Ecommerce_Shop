import { Grid } from '@mui/material';
import { ContactUsForm } from './ContactUsForm';
import { StoreLocation } from './StoreLocation';

export const ContactUs = props => {
  return (
    <Grid container spacing={12} id="contact-us">
      <Grid item xs={6}>
        <ContactUsForm />
      </Grid>
      <Grid item xs={6}>
        <StoreLocation />
      </Grid>
    </Grid>
  );
};
