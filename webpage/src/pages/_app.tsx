import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@/lib/theme';
import GlobalLayout from '../components/layout/layout';
import { NextPageWithRole } from '../types/next-page';
import type { AppProps } from 'next/app';
import '@/styles/globals.css'
import { SnackbarProvider } from '../components/snackbar';


type AppPropsWithRole = AppProps & {
  Component: NextPageWithRole
}
export default function App({ Component, pageProps }: AppPropsWithRole) {
  const requireAdmin = Component.requireAdmin || false;
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
      <GlobalLayout requireAdmin={requireAdmin} guestOnly={Component.guestOnly}>
        <Component {...pageProps} />
      </GlobalLayout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
