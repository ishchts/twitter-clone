import express, { Application } from 'express';

import './utils/dotenv';

import { UserController } from './controllers/user-controller';
import { TweetsController } from './controllers/tweets-controller';
import { registerValidations } from './validations/register';
import { createTweetValidations } from './validations/create-tweet-validations';
import './core/db';
import { passport } from './core/passport';

const app: Application = express();

app.use(express.json());
app.use(passport.initialize());

// app.patch('/users', UserController.update);
// app.delete('/users', UserController.delete);
app.get('/users', UserController.index);
app.get('/users/me', passport.authenticate('jwt', { session: false }), UserController.getUserInfo);
app.get('/users/:id', registerValidations, UserController.show);

app.get('/tweets', TweetsController.index);
app.get('/tweets/:id', TweetsController.show);
app.delete('/tweets/:id', passport.authenticate('jwt'), TweetsController.delete);
app.post('/tweets', passport.authenticate('jwt'), createTweetValidations, TweetsController.create);
app.patch('/tweets/:id', passport.authenticate('jwt'), createTweetValidations, TweetsController.update);

app.get('/auth/verify', registerValidations, UserController.verify);
app.post('/auth/register', registerValidations, UserController.create);
app.post('/auth/login', passport.authenticate('local'), UserController.afterLogin);

app.listen(Number(process.env.PORT), () => {
  // eslint-disable-next-line no-console
  console.log('server started');
});
