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
  const [error, setError] = useState({
    email: '',
    password: '',
  });
  const handleSubmit = () => {
    let success = true;
    const errorTemp = {
      email: '',
      password: '',
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!User.email) {
      errorTemp.email = 'Please enter an email.';
      success = false;
    } else if (!emailRegex.test(User.email)) {
      errorTemp.email = 'Invalid email format.';
      success = false;
    }
    if (!User.password) {
      errorTemp.password = 'Please enter an password.';
      success = false;
    }
    setError(errorTemp);
    return success;
  };
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
              }}
              id="outlined-adornment-password"
              endAdornment={
                <InputAdornment
                  position="end"
                  onClick={() => {
                    setUser({ ...User, email: '' });
                  }}
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <CancelOutlined />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {error.email ? (
              <FormHelperText>{error.email}</FormHelperText>
            ) : (
              <FormHelperText>Type your email</FormHelperText>
            )}
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
              type="password"
              onChange={e => {
                setUser({ ...User, password: e.target.value });
              }}
              endAdornment={
                <InputAdornment
                  position="end"
                  onClick={() => {
                    setUser({ ...User, password: '' });
                  }}
                >
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    <CancelOutlined />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {error.password ? (
              <FormHelperText>{error.password}</FormHelperText>
            ) : (
              <FormHelperText>Type your password</FormHelperText>
            )}
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
            const success = handleSubmit();
            if (!success) {
              return;
            }
            const user = await axiosClient
              .post('/auth/login', {
                email: User.email,
                password: User.password,
              })
              .then(
                (data: any) => {
                  console.log(data);
                  const access = data.data.accessToken;
                  if (access !== undefined) {
                    localStorage.setItem('accessToken', access);
                    userInfoContext.setUserInfor(data.data);
                    navigate('/');
                  }
                },
                //err => console.log('No fun' + JSON.stringify(err.data)),
              )
              .catch(err => {
                console.log(err.response);
                if (err.response.data.message === 'User not found') {
                  setError({ email: 'Email does not match', password: '' });
                } else {
                  setError({
                    email: '',
                    password: 'Password does not match',
                  });
                }
              });
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
