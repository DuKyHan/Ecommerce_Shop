import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  borderRadius: 30,
  color: theme.palette.text.secondary,
  lineHeight: '60px',
}));

export function ModelMess(props) {
  const type = props.type;
  const content = props.content;
  return (
    <>
      {type === 0 ? (
        <Box sx={{ flexGrow: 1, width: 700 }}>
          <Stack direction={'row'} spacing={2}>
            <Avatar>R</Avatar>
            <Item>
              <Typography sx={{ pl: 2, pr: 2, pt: 1 }}>
                Bạn có vấn đề gì thắc mắc, vui lòng nhắn tin để có được hướng
                dẫn sớm nhất!
              </Typography>
            </Item>
          </Stack>
        </Box>
      ) : (
        <Box
          component={'div'}
          sx={{
            flexGrow: 1,
            width: 700,
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'right',
            float: 'right',
            pr: 5,
          }}
        >
          <Stack direction={'row'} spacing={2}>
            <Item>
              <Typography sx={{ pl: 2, pr: 2, pt: 1 }}>{content}</Typography>
            </Item>
            <Avatar>R</Avatar>
          </Stack>
        </Box>
      )}
    </>
  );
}
