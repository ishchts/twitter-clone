import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import { UserModel } from '../models/user-model';
import { generateHash } from '../utils/generage-hash';
import { sendEmail } from '../utils/send-email';
import { isValidObjectId } from '../utils/is-valid-object-id';

class _UserController {
  index = async (req: Request, res: Response) => {
    try {
      const users = await UserModel.find({}).exec();

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

  create = async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        res.status(400).json({ status: 'error11', message: errors.array() });
        return;
      }

      const data = {
        email: req.body.email,
        username: req.body.username,
        fullName: req.body.fullName,
        password: generateHash(`${req.body.password}:${process.env.SECRET_HASH_KEY}`),
        confirmHash: generateHash(String(process.env.SECRET_HASH_KEY)),
      };

      const user = await UserModel.create(data);

      sendEmail({
        from: 'admin@twitter-clone.com',
        to: data.email,
        subject: 'Подтверждение почты Twitter Clone Tutorial',
        html: `Для того, чтобы подтвердить почту, перейдите
          <a href="http://localhost:${process.env.PORT}/auth/verify?hash=${data.confirmHash}">по этой ссылке</a>
        `,
      });

      res.json({
        status: 'success',
        data: user,
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  verify = async (req: Request, res: Response) => {
    try {
      const { hash } = req.query;

      if (!hash) {
        res.status(400).send();
      }

      const user = await UserModel.findOne({ confirmHash: hash }).exec();

      if (!user) {
        // eslint-disable-next-line no-console
        console.log('пользователь не найден');
        return;
      }

      user.confirmed = true;
      await user.save();

      res.json({
        status: 'success',
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
      const userId = req.params.id;

      if (!isValidObjectId(userId)) {
        res.status(400).send();
      }

      const user = await UserModel.findById(userId).exec();

      res.json({
        status: 'success',
        data: user,
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  afterLogin = async (req: Request, res: Response) => {
    try {
      if (req.user) {
        res.json({
          status: 'success',
          data: {
            // @ts-ignore
            ...req.user.toJSON(),
            token: jwt.sign({ data: req.user }, String(process.env.SECRET_HASH_KEY), {
              expiresIn: '30d',
            }),
          },
        });
      }
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }

  getUserInfo = async (req: Request, res: Response) => {
    try {
      // @ts-ignore
      const user = req.user.toJSON();

      res.json({
        status: 'success',
        data: user,
      });
    } catch (e) {
      res.json({
        status: 'error',
        message: JSON.stringify(e),
      });
    }
  }
}

export const UserController = new _UserController();
