import { body } from 'express-validator';

export const registerValidations = [
  body('email', 'Введите e-mail')
    .isEmail()
    .withMessage('Неверный E-Mail')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Неверная длинна почты'),
  body('fullName', 'Введите имя')
    .isString()
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Неверная длинна имени'),
  body('username', 'Введите логин')
    .isString()
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Неверная длинна имени'),
  body('password', 'Укажите пароль')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('Неверная длинна пароля')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Пароли не совпадают');
      }

      return value;
    }),
];
