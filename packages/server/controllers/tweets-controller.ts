import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { TweetModel } from '../models/tweet-model';
import { isValidObjectId } from '../utils/is-valid-object-id';

class _TweetsController {
  index = async (req: Request, res: Response) => {
    try {
      const users = await TweetModel
        .find({})
        .populate('user')
        .sort({ createdAt: '-1' })
        .exec();

      res.json({
        status: 'success',
        data: users,
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  show = async (req: Request, res: Response) => {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(400).send();
      }

      const tweet = await TweetModel.findById(tweetId).exec();

      res.json({
        status: 'success',
        data: tweet,
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  create = async (req: Request, res: Response) => {
    try {
      const { user } = req;

      if (!user) {
        // eslint-disable-next-line no-console
        console.log('Пользователь не найден');
        return;
      }

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error11', message: errors.array() });
        return;
      }

      const data = {
        text: req.body.text,
        // @ts-ignore
        // eslint-disable-next-line no-underscore-dangle
        user: user._id,
      };

      const tweet = await TweetModel.create(data);
      res.json({
        status: 'success',
        // @ts-ignore
        data: await tweet.populate('user').execPopulate(),
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  delete = async (req: Request, res: Response) => {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(400).send();
      }

      const tweet = await TweetModel.findById(tweetId);

      if (tweet) {
        tweet.remove();
        res.send();
      }

      res.status(400).send();
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  update = async (req: Request, res: Response) => {
    try {
      const tweetId = req.params.id;

      if (!isValidObjectId(tweetId)) {
        res.status(400).send();
      }

      const tweet = await TweetModel.findById(tweetId);

      if (tweet) {
        tweet.text = req.body.text;
        tweet.save();
        res.send();
      }

      res.status(400).send();
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }
}

export const TweetsController = new _TweetsController();
