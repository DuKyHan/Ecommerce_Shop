import { CancelOutlined } from '@mui/icons-material';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import { UserInfoContext } from '../context/index';
import axios from 'axios';
import { axiosClient } from 'data';
import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserInfo } from '../data';

export const LoginFrame = props => {
  const userInfoContext = useContext(UserInfoContext);
  const navigate = useNavigate();
  const [User, setUser] = useState({ email: '', password: '' });
  return (
    <Grid
      item
      xs={6}
      height={'80vh'}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        my={6}
        p={2}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'white',
          borderRadius: '16px',
          p: 6,
        }}
      >
        <Typography variant="h5" color={'primary'} fontWeight={'bold'} mb={4}>
          Đăng nhập
        </Typography>
        <Box>
          <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
            <InputLabel htmlFor="User">Email</InputLabel>
            <OutlinedInput
              value={User.email}
              onChange={e => {
                setUser({ ...User, email: e.target.value });
                console.log(User);
              }}
              id="outlined-adornment-password"
              //type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    //onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CancelOutlined />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText id="filled-weight-helper-text">
              Type your email
            </FormHelperText>
          </FormControl>
        </Box>
        <Box>
          <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={User.password}
              onChange={e => {
                setUser({ ...User, password: e.target.value });
                console.log(User);
              }}
              //type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    //onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    <CancelOutlined />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            <FormHelperText id="filled-weight-helper-text">
              Type your password
            </FormHelperText>
          </FormControl>
        </Box>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Nhớ mật khẩu"
          sx={{ alignSelf: 'start' }}
        />
        <Button
          fullWidth
          variant="contained"
          sx={{ my: 4 }}
          onClick={async () => {
            const user = await axiosClient
              .post('/auth/login', {
                email: User.email,
                password: User.password,
              })
              .then((data: any) => {
                userInfoContext.setUserInfor(data.data);
                navigate('/');
              })
              .catch();
          }}
        >
          Đăng nhập
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
          <Typography>Bạn chưa có tài khoản</Typography>
          <Button onClick={() => navigate('/auth/register')}>Đăng ký</Button>
        </Box>
      </Box>
    </Grid>
  );
};
