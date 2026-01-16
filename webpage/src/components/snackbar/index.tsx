'use client';

import { createContext, useContext, useState } from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

type SnackbarContextType = {
  success: (msg: string) => void;
  error: (msg: string) => void;
  info: (msg: string) => void;
  warning: (msg: string) => void;
};

const SnackbarContext = createContext<SnackbarContextType | null>(null);

export function SnackbarProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<AlertColor>('success');

  const show = (msg: string, type: AlertColor) => {
    setMessage(msg);
    setSeverity(type);
    setOpen(true);
  };

  return (
    <SnackbarContext.Provider
      value={{
        success: (msg) => show(msg, 'success'),
        error: (msg) => show(msg, 'error'),
        info: (msg) => show(msg, 'info'),
        warning: (msg) => show(msg, 'warning'),
      }}
    >
      {children}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity={severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => {
  const ctx = useContext(SnackbarContext);
  if (!ctx) throw new Error('useSnackbar must be used inside SnackbarProvider');
  return ctx;
};
