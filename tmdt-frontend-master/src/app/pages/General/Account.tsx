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
import { useContext, useState } from 'react';
import { UserInfoContext } from '../LoginPage/context';
import { getUserInfo } from '../LoginPage/data';
import { axiosClient } from 'data';

export default function Account() {
  const userInfoContext = useContext(UserInfoContext);
  const userInfo = userInfoContext.getUserInfo();
  const [disable, setDisable] = useState(true);
  const [updateUser, setUpdateUser] = useState(userInfo);
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
              {disable ? (
                <Link
                  underline="hover"
                  color="primary"
                  href="#"
                  onClick={() => setDisable(!disable)}
                >
                  Thay đổi
                </Link>
              ) : (
                <Link
                  underline="hover"
                  color="primary"
                  href="#"
                  onClick={async () => {
                    const id = userInfo.id;
                    const user = await axiosClient
                      .patch(`user/` + id, {
                        username: updateUser.username,
                        gender: updateUser.gender,
                        numberphone: updateUser.numberPhone,
                        password: 'dukyhan123',
                      })
                      .then((data: any) => {
                        userInfoContext.setUserInfor(updateUser);
                        console.log(data);
                      });
                    setDisable(!disable);
                  }}
                >
                  Đồng ý
                </Link>
              )}
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
                disabled
                value={updateUser.email}
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
                disabled={disable}
                value={updateUser.username}
                defaultValue="Nguyễn Văn A"
                onChange={e =>
                  setUpdateUser({ ...updateUser, username: e.target.value })
                }
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              {/* <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link> */}
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
                  disabled={disable}
                  value="Female"
                  control={<Radio />}
                  label="Female"
                  onClick={e => setUpdateUser({ ...updateUser, gender: 'Nữ' })}
                  checked={updateUser.gender == 'Nữ' ? true : false}
                />
                <FormControlLabel
                  disabled={disable}
                  value="male"
                  control={<Radio />}
                  label="Male"
                  onClick={e => setUpdateUser({ ...updateUser, gender: 'Nam' })}
                  checked={updateUser.gender == 'Nam' ? true : false}
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
                disabled={disable}
                value={updateUser.numberPhone}
                defaultValue="0971667308"
                onChange={e =>
                  setUpdateUser({ ...updateUser, numberPhone: e.target.value })
                }
                variant="filled"
                size="small"
              />
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              {/* <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link> */}
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography>Mật khẩu</Typography>
            </Grid>
            <Grid item xs={6} sx={{ marginRight: 2 }}>
              <TextField
                disabled={disable}
                hiddenLabel
                fullWidth
                defaultValue="1234556787"
                variant="filled"
                size="small"
                type={disable ? 'password' : 'text'}
              ></TextField>
            </Grid>
            <Grid item xs={2} sx={{ ml: 3 }}>
              {/* <Link underline="hover" color="primary" href="#">
                Thay đổi
              </Link> */}
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </Box>
  );
}
