import { styled } from '@mui/system';

import Background from 'src/assets/img/lohp.png';

export const Main = styled('main')`
  display: flex;
  height: 100%;
  & .col-right {
    width: 50%;
  }
`;

export const ColLeft = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  background-image: url(${Background});
  .MuiSvgIcon-root {
    width: 360px;
    height: 290px;
    fill: #ffffff;
  }
`;

export const ColRight = styled('div')`
  width: 45%;
  padding: 35px 350px 35px 35px;
  .MuiTypography-root {
    margin-top: 60px;
    margin-bottom: 60px;
  }
  .MuiButton-root {
    margin-bottom: 15px;
  }
`;
