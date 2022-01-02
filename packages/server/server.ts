import express, { Application } from 'express';

import './utils/dotenv';

import { UserController } from './controllers/user-controller';
import { registerValidations } from './validations/register';
import './core/db';

const app: Application = express();

app.use(express.json());

app.get('/users', UserController.index);
app.post('/users', registerValidations, UserController.create);
app.get('/users/verify', registerValidations, UserController.verify);
// app.patch('/users', UserController.update);
// app.delete('/users', UserController.delete);

app.listen(Number(process.env.PORT), () => {
  // eslint-disable-next-line no-console
  console.log('server started');
});
