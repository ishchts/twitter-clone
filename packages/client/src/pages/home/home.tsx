import React from 'react';

import { Avatar, Button, TextField } from '@mui/material';

import { Sidebar } from 'src/components/sidebar';

import { ReactComponent as Media } from 'src/assets/icons/media.svg';
import { ReactComponent as Gif } from 'src/assets/icons/gif.svg';
import { ReactComponent as Poll } from 'src/assets/icons/poll.svg';
import { ReactComponent as Emoji } from 'src/assets/icons/emoji.svg';
import { ReactComponent as Schedule } from 'src/assets/icons/schedule.svg';

import {
  Section, Main, Content, RightSideBar, TweetForm,
} from './styles';

export const Home: React.FC = () => (
  <Section>
    <Sidebar />
    <Main>
      <Content>
        <TweetForm>
          <Avatar
            sx={{ width: 48, height: 48 }}
            alt="https://avatars.mds.yandex.net/i?id=bbd486ec720a73d4dec3fa4ed3d3b204-4965589-images-thumbs&n=13&exp=1"
            src="https://avatars.mds.yandex.net/i?id=bbd486ec720a73d4dec3fa4ed3d3b204-4965589-images-thumbs&n=13&exp=1"
          />
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              margin="dense"
              label="What's happening?"
              variant="outlined"
              placeholder="What's happening"
              multiline
              fullWidth
            />
            <div>
              <Media />
              <Gif />
              <Poll />
              <Emoji />
              <Schedule />
              <Button variant="contained">Tweet</Button>
            </div>
          </form>
        </TweetForm>
      </Content>
      <RightSideBar>
        RightSideBar
      </RightSideBar>
    </Main>
  </Section>

);
