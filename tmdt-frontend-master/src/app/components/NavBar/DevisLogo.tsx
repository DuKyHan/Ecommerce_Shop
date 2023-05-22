import { Box } from '@mui/material';
import _Logo from './assets/logo.png';

export function DevisLogo() {
  return (
    <Box sx={{ borderRadius: '50%' }}>
      <img src={_Logo} alt="Logo" height={'36px'} />
    </Box>
  );
}
