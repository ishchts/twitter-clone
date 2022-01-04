import { body } from 'express-validator';

export const createTweetValidations = [
  body('text', 'Введите текст твита')
    .isString()
    .isLength({
      max: 280,
    })
    .withMessage('Неверная длинна 280'),
];
