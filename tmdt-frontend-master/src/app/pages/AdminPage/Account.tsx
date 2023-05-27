import * as React from 'react';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from '@mui/material';
import { useContext } from 'react';
import { UserInfoContext } from '../LoginPage/context';

export default function Account() {
  const userInfoContext = useContext(UserInfoContext);
  const userInfo = userInfoContext.getUserInfo();
  return (
    <Box sx={{ p: 3 }}>
      <Typography gutterBottom variant="h5" component="nav">
        Thông tin cá nhân
      </Typography>
      <Divider />
      <Box sx={{ flexGrow: 1, width: 857, marginTop: 3 }}>
        <Stack spacing={1}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Avatar
                sx={{ ml: 2 }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <Typography sx={{ ml: 2 }}>Customer Name</Typography>
            </Grid>
            <Grid item xs={2} sx={{ ml: 5 }}>
              <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <TextField
                hiddenLabel
                fullWidth
                value={userInfo.email}
                type="email"
                defaultValue="customer@gmail.com"
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Tên tài khoản</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <TextField
                hiddenLabel
                fullWidth
                type="text"
                value={userInfo.username}
                defaultValue="nameless"
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Giới tính</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  disabled
                  value="female"
                  control={<Radio />}
                  label="Female"
                  checked={userInfo.gender == 'Nữ' ? true : false}
                />
                <FormControlLabel
                  disabled
                  value="male"
                  control={<Radio />}
                  label="Male"
                  checked={userInfo.gender == 'Nam' ? true : false}
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}></Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Số điện thoại</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <TextField
                hiddenLabel
                fullWidth
                type="text"
                value={userInfo.numberPhone}
                defaultValue="0971667308"
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Mật khẩu</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <TextField
                disabled
                hiddenLabel
                fullWidth
                type="password"
                defaultValue="1234556787"
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
