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
import { axiosClient } from 'data';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = props => {
  const navigate = useNavigate();
  const [registerUser, setRegisterUser] = useState({
    email: '',
    password: '',
    repassword: '',
    gender: '',
    numberphone: '',
  });
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
          Đăng ký
        </Typography>
        <Box>
          <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={registerUser.email}
              onChange={e => {
                setRegisterUser({ ...registerUser, email: e.target.value });
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
              label="Email"
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
              value={registerUser.password}
              onChange={e => {
                setRegisterUser({ ...registerUser, password: e.target.value });
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
        <Box>
          <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Retype Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={registerUser.repassword}
              onChange={e => {
                setRegisterUser({
                  ...registerUser,
                  repassword: e.target.value,
                });
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
              Type your password again
            </FormHelperText>
          </FormControl>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            width: '100%',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                onClick={e => {
                  setRegisterUser({
                    ...registerUser,
                    gender: 'Nam',
                  });
                  console.log(registerUser);
                }}
                checked={registerUser.gender === 'Nam'}
              />
            }
            label="Nam"
          />
          <FormControlLabel
            control={
              <Checkbox
                onClick={e => {
                  setRegisterUser({
                    ...registerUser,
                    gender: 'Nữ',
                  });
                  console.log(registerUser);
                }}
                checked={registerUser.gender === 'Nữ'}
              />
            }
            label="Nữ"
          />
        </Box>
        <Box>
          <FormControl fullWidth sx={{ my: 1 }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Number Phone
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              value={registerUser.numberphone}
              onChange={e => {
                setRegisterUser({
                  ...registerUser,
                  numberphone: e.target.value,
                });
                console.log(registerUser);
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
              Type your Number Phone
            </FormHelperText>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          sx={{
            my: 4,
            borderRadius: '15px',
            pl: 4,
            pr: 4,
            textTransform: 'none',
          }}
          onClick={() => {
            axiosClient
              .post('/auth/register', {
                email: registerUser.email,
                password: registerUser.password,
                gender: registerUser.gender,
                repassword: registerUser.repassword,
                phonenumber: registerUser.numberphone,
              })
              .then(data => {
                navigate('/');
              })
              .catch();
          }}
        >
          Tạo tài khoản
        </Button>
      </Box>
    </Grid>
  );
};
