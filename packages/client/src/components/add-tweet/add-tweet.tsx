import React, { useState } from 'react';

import { Button } from '@mui/material';

import { ReactComponent as Media } from 'src/assets/icons/media.svg';
import { ReactComponent as Gif } from 'src/assets/icons/gif.svg';
import { ReactComponent as Poll } from 'src/assets/icons/poll.svg';
import { ReactComponent as Emoji } from 'src/assets/icons/emoji.svg';
import { ReactComponent as Schedule } from 'src/assets/icons/schedule.svg';

import {
  Tweet,
  TweetAvatar,
  TweetActions,
  MuiTextField,
  TweetActionsColLeft,
  TweetActionsColRight,
  MUICircularProgress,
} from './styles';

export const INPUT_LENGTH_LIMIT = 280;

export const AddTweet: React.FC = () => {
  const [text, setText] = useState<string>('');

  const progress = Math.floor((text.length / INPUT_LENGTH_LIMIT) * 100);

  return (
    <Tweet>
      <TweetAvatar
        sx={{ width: 48, height: 48 }}
        alt="https://avatars.mds.yandex.net/i?id=bbd486ec720a73d4dec3fa4ed3d3b204-4965589-images-thumbs&n=13&exp=1"
        src="https://avatars.mds.yandex.net/i?id=bbd486ec720a73d4dec3fa4ed3d3b204-4965589-images-thumbs&n=13&exp=1"
      />
      <form onSubmit={(e) => {
        e.preventDefault();
        setText('');
      }}
      >
        <MuiTextField
          margin="dense"
          label="What's happening?"
          variant="outlined"
          placeholder="What's happening"
          multiline
          fullWidth
          value={text}
          inputProps={{ maxLength: INPUT_LENGTH_LIMIT }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <TweetActions>
          <TweetActionsColLeft>
            <Media />
            <Gif />
            <Poll />
            <Emoji />
            <Schedule />
          </TweetActionsColLeft>
          <TweetActionsColRight>
            <MUICircularProgress
              variant="determinate"
              value={progress}
              color="primary"
              size={20}
            />
            <Button type="submit" variant="contained">Tweet</Button>
          </TweetActionsColRight>
        </TweetActions>
      </form>
    </Tweet>
  );
};
