import mailer from '../core/mailer';

type SendEmailParams = {
  from: string,
  to: string,
  subject: string,
  html: string
}

export const sendEmail = ({
  from,
  to,
  subject,
  html,
}: SendEmailParams) => {
  mailer.sendMail({
    from,
    to,
    subject,
    html,
  }, (err, info) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      // eslint-disable-next-line no-console
      console.log(info);
    }
  });
};
