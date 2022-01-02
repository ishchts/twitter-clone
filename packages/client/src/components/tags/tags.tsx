import React from 'react';

import {
  ListItem,
} from '@mui/material';

import { Tag } from 'src/store/features/tags/tags-slice';

import { TagList, MUITypography, MUIListItemText } from './styles';

type TagsProps = {
  items: Tag[]
}

export const Tags: React.FC<TagsProps> = ({
  items,
}) => {
  if (!items.length) {
    return null;
  }

  return (
    <TagList
      subheader={
        <MUITypography variant="h6">Актуальные темы</MUITypography>
      }
    >
      {items.map((tag) => (
        <ListItem key={tag.name}>
          <MUIListItemText primary={tag.name} secondary={`Твитов: ${tag.count}`} />
        </ListItem>
      ))}
    </TagList>
  );
};
