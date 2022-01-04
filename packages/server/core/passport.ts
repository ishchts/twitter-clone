import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { UserModel } from '../models/user-model';

// eslint-disable-next-line no-underscore-dangle
passport.serializeUser((user: any, done) => done(null, user._id));
passport.deserializeUser((id: string, done) => {
  UserModel.findById(id)
    .then((user: any) => done(null, user))
    .catch((err: any) => done(err, null));
});

passport.use(
  new LocalStrategy(async (username, _, done): Promise<void> => {
    try {
      const user = await UserModel.findOne({ $or: [{ email: username }, { username }] }).exec();

      if (!user) {
        return done(null, false);
      }

      return done(null, user);
    } catch (e) {
      return done(e, false);
    }
  }),
);

passport.use(
  new JwtStrategy(
    {
      secretOrKey: process.env.SECRET_HASH_KEY,
      jwtFromRequest: ExtractJwt.fromHeader('token'),
    },
    async (payload: { data: { _id: string}}, done) => {
      try {
        // eslint-disable-next-line no-underscore-dangle
        const user = await UserModel.findById(payload.data._id);

        if (!user) {
          done(null, false);
          return;
        }
        done(null, user);
      } catch (e) {
        done(e, false);
      }
    },
  ),
);

export { passport };
