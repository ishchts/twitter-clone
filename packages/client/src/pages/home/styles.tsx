import { styled } from '@mui/system';

export const Section = styled('section')`
  display: flex;
  height: 100%;
`;

export const Main = styled('main')`
  width: calc(100% - 590px);
  display: flex;
`;

export const Content = styled('div')`
  width: 600px;
  border-left: 1px solid rgb(239, 243, 244);
  border-right: 1px solid rgb(239, 243, 244);
`;

export const RightSideBar = styled('aside')`
  width: 350px;
`;

export const TweetForm = styled('div')`
  padding: 10px 16px 0 16px;
  display: flex;
  flex-wrap: wrap;
  .MuiAvatar-root {
    margin-right: 15px;
  }
  form {
    flex-grow: 1;
  }
  svg {
    width: 20px;
  }
`;
