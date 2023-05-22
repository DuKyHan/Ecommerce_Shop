import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { Baomat } from './components/Baomat';
import { Vanchuyen } from './components/Vanchuyen';
import { Thanhtoan } from './components/Thanhtoan';
import { Doitra } from './components/Doitra';
import { useNavigate } from 'react-router-dom';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export function Policy(props) {
  const [value, setValue] = React.useState(props.page);
  const navigate = useNavigate();

  const policy = [<Baomat />, <Vanchuyen />, <Doitra />, <Thanhtoan />];

  const handleChange = newValue => {
    setValue(newValue);
    navigate(`/general/policy/${newValue}`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        width: '100%',
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={8.2} sx={{ ml: 1, mr: 1 }}>
          {policy[value]}
        </Grid>
        <Divider sx={{ ml: 0.2 }} orientation="vertical" />
        <Grid item xs={3.5}>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItemButton
              selected={value === 0}
              onClick={() => handleChange(0)}
            >
              <ListItemText primary="Chính sách bảo mật" />
            </ListItemButton>
            <ListItemButton
              selected={value === 1}
              onClick={() => handleChange(1)}
            >
              <ListItemText primary="Chính sách vận chuyển" />
            </ListItemButton>
            <ListItemButton
              selected={value === 2}
              onClick={() => handleChange(2)}
            >
              <ListItemText primary="Chính sách đổi trả" />
            </ListItemButton>
            <ListItemButton
              selected={value === 3}
              onClick={() => handleChange(3)}
            >
              <ListItemText primary="Chính sách thanh toán" />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
