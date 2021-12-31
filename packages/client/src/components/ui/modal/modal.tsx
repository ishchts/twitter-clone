import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';

export type ModalProps = {
  open: boolean
}
export const Modal: React.FC<ModalProps> = ({ open, children }) => (
  <Dialog open={open}>
    <DialogTitle>title</DialogTitle>
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
