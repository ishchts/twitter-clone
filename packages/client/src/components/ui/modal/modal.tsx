import React from 'react';
import {
  Dialog, DialogProps, DialogTitle, DialogContent,
} from '@mui/material';

interface ModalProps extends DialogProps {
  open: boolean
  onClose: () => void
  title?: string
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  fullWidth,
  title,
  children,
}) => (
  <Dialog open={open} fullWidth={fullWidth} onClose={onClose}>
    {title && (
      <DialogTitle>{title}</DialogTitle>
    )}
    <DialogContent>{children}</DialogContent>
  </Dialog>
);
