import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import PhoneIcon from '@mui/icons-material/Phone';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SendIcon from '@mui/icons-material/Send';

import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FormControl from '@mui/material/FormControl';
import { ModelMess } from './components/ModelMess';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 5,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 700,
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export function Support() {
  const [text, setText] = React.useState('');
  const [content, setContent] = React.useState<any[]>([]);
  const handleSent = value => {
    setText('');
    setContent(oldArray => [...oldArray, value]);
  };
  return (
    <Box sx={{ flexGrow: 1, width: 857 }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">A</Avatar>}
        action={
          <Box sx={{ pr: 2 }}>
            <IconButton aria-label="settings">
              <PhoneIcon />
            </IconButton>
          </Box>
        }
        title={
          <Typography variant="h5" fontWeight={600} color={'#4737FF'}>
            Hỗ trợ trực tuyến
          </Typography>
        }
      />
      <Divider />
      <Box width={'auto'} height={400} sx={{ pl: 3, pt: 2 }}>
        <ModelMess type={0} />
        {content.length !== 0 &&
          content.map((data, index) => (
            <Box key={index} sx={{ mt: 2 }}>
              <ModelMess content={data} type={1} />
            </Box>
          ))}
      </Box>
      <Divider />
      <Box sx={{ pl: 3, mt: 2 }}>
        <Grid container alignItems={'center'} spacing={2}>
          <IconButton aria-label="settings">
            <AddPhotoAlternateIcon fontSize="large" />
          </IconButton>
          <FormControl variant="standard" sx={{ ml: 1 }}>
            <BootstrapInput
              onChange={e => setText(e.target.value)}
              placeholder="Aa"
              value={text}
              id="bootstrap-input"
            />
          </FormControl>
          <IconButton sx={{ ml: 1 }} onClick={() => handleSent(text)}>
            <SendIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Box>
    </Box>
  );
}
