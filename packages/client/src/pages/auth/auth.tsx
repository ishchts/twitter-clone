import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Typography, Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

import { Main, ColLeft, ColRight } from './styles';

export const Auth:React.FC = () => (
  <>
    <Main>
      <ColLeft>
        <TwitterIcon />
      </ColLeft>
      <ColRight>
        <TwitterIcon color="primary" fontSize="large" />
        <Typography variant="h2" component="h1" fontWeight="bold">
          В курсе происходящего
        </Typography>
        <Button component={Link} to="/sign-in" size="large" variant="contained" fullWidth>Регистрация</Button>
        <Button component={Link} to="/login" size="large" variant="contained" color="inherit" fullWidth>Войти</Button>
      </ColRight>
    </Main>
    <Outlet />
  </>
);
