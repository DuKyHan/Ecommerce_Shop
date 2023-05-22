import { Box, Grid, List, ListItem, Typography } from '@mui/material';
import { ProductDescriptionSectionProps } from '../types';

export const ProductDescriptionSection = (
  props: ProductDescriptionSectionProps,
) => {
  const specifications = [
    'Chống nước',
    'Không có gì đặc biệt',
    'Comment chỉ mang tính chất minh họa',
  ];

  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Typography variant="h5">Mô tả sản phẩm</Typography>
          <Typography my={3} color="dimgray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom={true}>
            Đặc tính
          </Typography>
          <List>
            {specifications.map((spec, index) => (
              <ListItem>
                <Typography color={'dimgray'}>- {spec}</Typography>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};
