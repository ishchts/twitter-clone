import { styled } from '@mui/system';
import { List, ListItemText, Typography } from '@mui/material';

export const TagList = styled(List)`
  border-radius: 5px;
  background-color: rgb(247, 249, 249);
`;

export const MUITypography = styled(Typography)`
  padding: 10px 16px 0 16px;
`;

export const MUIListItemText = styled(ListItemText)`
  span {
    font-weight: bold;
  }
`;
