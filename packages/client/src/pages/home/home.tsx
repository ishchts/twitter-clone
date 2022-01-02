import React, { useState, useEffect } from 'react';

import { Button } from '@mui/material';

import { useAppSelector, useAppDispatch } from 'src/store';
import { getTweets } from 'src/store/features/tweets/async-actions';
import { getTags } from 'src/store/features/tags/async-actions';

import { Modal } from 'src/components/ui/modal';
import { Sidebar } from 'src/components/sidebar';
import { AddTweet } from 'src/components/add-tweet';
import { Tags } from 'src/components/tags';

import {
  Section, Main, Content, RightSideBar,
} from './styles';

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: tweets } = useAppSelector((state) => state.tweets);
  const { items: tags } = useAppSelector((state) => state.tags);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getTweets());
    dispatch(getTags());
  }, [dispatch]);
  console.log('tweets', tweets);

  return (
    <>
      <Section>
        <Sidebar>
          <Button
            variant="contained"
            size="large"
            fullWidth
            onClick={() => {
              setOpen(true);
            }}
          >
            Tweet
          </Button>
        </Sidebar>
        <Main>
          <Content>
            <AddTweet />
          </Content>
          <RightSideBar>
            <div>search bar</div>
            <Tags items={tags} />
          </RightSideBar>
        </Main>
      </Section>
      <Modal open={open} onClose={() => setOpen(false)} fullWidth>
        <AddTweet />
      </Modal>
    </>
  );
};
