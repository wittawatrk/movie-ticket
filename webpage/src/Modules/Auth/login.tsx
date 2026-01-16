'use client';
import { useSnackbar } from '@/components/snackbar';
import { login } from '@/services/login.service';
import {
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loggingIn, setLoggingIn] = useState<boolean>(false);
  const [_, setUserStore] = useLocalStorage('user', null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const afterLogin = useCallback(() => {
    const redirect = searchParams?.get('redirect');

    if (redirect) {
      router.replace(redirect);
      return;
    }

    // redirect ตาม role
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user.role === 'ADMIN') {
      router.replace('/admin');
    } else {
      router.replace('/dashboard');
    }
  }, [searchParams, router]);

  const { success, error } = useSnackbar();

  const onSubmit = useCallback(async () => {
    try {
      setLoggingIn(true);

      const loginResult = await login(username, password);

      if (!loginResult.authorized) {
        error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
        return;
      }

      setUserStore(loginResult.user);
      success('เข้าสู่ระบบสำเร็จ');
      afterLogin();
    } catch (e: any) {
      error(e.message || 'ไม่สามารถเข้าสู่ระบบได้');
    } finally {
      setLoggingIn(false);
    }
  }, [username, password, afterLogin, setUserStore, success, error]);

  return (
    <Box sx={{ maxWidth: 420, mx: 'auto', mt: 10 }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>
          <Typography variant="h5" align="center" gutterBottom>
            เข้าสู่ระบบ
          </Typography>

          <TextField
            fullWidth
            label="อีเมล"
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <TextField
            fullWidth
            type="password"
            label="รหัสผ่าน"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Stack direction="row" justifyContent="flex-end" spacing={1} mt={3}>
            <Button variant="outlined" onClick={() => history.back()}>
              ย้อนกลับ
            </Button>

            <LoadingButton
              variant="contained"
              loading={loggingIn}
              onClick={onSubmit}
            >
              เข้าสู่ระบบ
            </LoadingButton>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
