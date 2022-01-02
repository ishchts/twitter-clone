import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('Установлено соединение с MongoDB');
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('Ошибка MongoDB:', err.text);
  });
