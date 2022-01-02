import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

import { UserModel } from '../models/user-model';
import { generateHash } from '../utils/generage-hash';
import { sendEmail } from '../utils/send-email';

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
        password: req.body.password,
        confirmHash: generateHash(String(process.env.SECRET_HASH_KEY)),
      };

      const user = await UserModel.create(data);

      sendEmail({
        from: 'admin@twitter-clone.com',
        to: data.email,
        subject: 'Подтверждение почты Twitter Clone Tutorial',
        html: `Для того, чтобы подтвердить почту, перейдите
          <a href="http://localhost:${process.env.PORT}/users/verify?hash=${data.confirmHash}">по этой ссылке</a>
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
}

export const UserController = new _UserController();
