import { Box, Card, Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Account from './Account';
import { Policy } from './Policy';
import { Support } from './Support';
import { GeneralBreadcrumbs } from './components/GeneralBreadcrumbs ';

export function General(props) {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(props.value);

  const page = [<Account />, <Support />, <Policy page={props.page} />];
  const handleChange = newValue => {
    setValue(newValue);
    if (newValue === 0) {
      navigate(`/general`);
    } else if (newValue === 1) {
      navigate(`/general/support`);
    } else if (newValue === 2) {
      navigate(`/general/policy/0`);
    } else if (newValue === 3) {
      navigate(`/general`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Thông tin</title>
        <meta name="description" content="Davies Fashion" />
      </Helmet>
      <Container>
        <Box my={3}>
          <Box mt={3}>
            <GeneralBreadcrumbs page={value} />
          </Box>
          <Box mt={4} mb={6}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <List component="nav" aria-label="secondary mailbox folder">
                  <ListItemButton
                    selected={value === 0}
                    onClick={() => handleChange(0)}
                  >
                    <ListItemText primary="Thông tin" />
                  </ListItemButton>
                  <ListItemButton
                    selected={value === 1}
                    onClick={() => handleChange(1)}
                  >
                    <ListItemText primary="Hỗ trợ trực tuyến" />
                  </ListItemButton>
                  <ListItemButton
                    selected={value === 2}
                    onClick={() => handleChange(2)}
                  >
                    <ListItemText primary="Chính sách" />
                  </ListItemButton>
                  <ListItemButton
                    selected={value === 3}
                    onClick={() => handleChange(3)}
                  >
                    <ListItemText primary="Đăng nhập" />
                  </ListItemButton>
                </List>
              </Grid>
              {/* <Grid item xs={0} /> */}
              <Grid item xs={9}>
                <Card
                  sx={{
                    flexGrow: 1,
                    bgcolor: 'background.paper',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  {page[value]}
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}
