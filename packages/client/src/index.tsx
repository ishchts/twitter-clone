import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ruLocale from 'date-fns/locale/ru';
import { LocalizationProvider } from '@mui/lab';
import { StyledEngineProvider } from '@mui/material/styles';
import DateAdapter from '@mui/lab/AdapterDateFns';

import { store } from './store';

import { App } from './app';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={DateAdapter} locale={ruLocale}>
        <StyledEngineProvider injectFirst>
          <App />
        </StyledEngineProvider>
      </LocalizationProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
