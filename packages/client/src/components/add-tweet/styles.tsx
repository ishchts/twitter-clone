import { styled } from '@mui/system';
import { Avatar, TextField, CircularProgress } from '@mui/material';

export const Tweet = styled('div')`
  position: relative;
  padding-left: 80px;
  padding-right: 16px;
`;

export const TweetAvatar = styled(Avatar)`
  position: absolute;
  left: 16px;
  top: 10px;
`;

export const MuiTextField = styled(TextField)`
  margin-bottom: 20px;
`;

export const TweetActions = styled('div')`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgb(239, 243, 244);
  padding-top: 12px;
`;

export const TweetActionsColLeft = styled('div')`
  svg {
    max-width: 20px;
    width: 100%;
  }
`;

export const TweetActionsColRight = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
`;

export const MUICircularProgress = styled(CircularProgress)``;
