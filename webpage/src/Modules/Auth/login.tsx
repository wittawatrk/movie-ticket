"use client";

import { useSnackbar } from "@/components/snackbar";
import { login } from "@/services/login.service";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export default function LandingLoginPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loggingIn, setLoggingIn] = useState(false);
  const [_, setUserStore] = useLocalStorage("user", null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { success, error } = useSnackbar();

  const afterLogin = useCallback(() => {
    const redirect = searchParams?.get("redirect");
    if (redirect) return router.replace(redirect);

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    router.replace(user.role === "ADMIN" ? "/admin" : "/dashboard");
  }, [searchParams, router]);

  const onSubmit = useCallback(async () => {
    try {
      setLoggingIn(true);
      const loginResult = await login(username, password);

      if (!loginResult.authorized) {
        error("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
        return;
      }

      setUserStore(loginResult.user);
      success("เข้าสู่ระบบสำเร็จ");
      afterLogin();
    } catch (e: any) {
      error(e.message || "ไม่สามารถเข้าสู่ระบบได้");
    } finally {
      setLoggingIn(false);
    }
  }, [username, password, afterLogin, setUserStore, success, error]);

  return (
    <Box
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-700"
    >
      <Box className="grid md:grid-cols-2 gap-8 max-w-5xl w-full px-6">

        <Box className="text-white flex flex-col justify-center">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
             Free Concert Tickets
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
            จองตั๋วคอนเสิร์ตฟรี ง่าย รวดเร็ว สำหรับทุกคน
          </Typography>
          <Typography sx={{ opacity: 0.8 }}>
            ค้นหาคอนเสิร์ตที่คุณชอบ และสำรองที่นั่งได้ทันที
          </Typography>
        </Box>


        <Card className="rounded-2xl shadow-xl">
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              เข้าสู่ระบบเพื่อจองตั๋ว
            </Typography>

            <TextField
              fullWidth
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              fullWidth
              type="password"
              label="Password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Stack spacing={2} mt={3}>
              <LoadingButton
                variant="contained"
                size="large"
                loading={loggingIn}
                onClick={onSubmit}
                fullWidth
              >
                Login
              </LoadingButton>

              <Button
                variant="outlined"
                size="large"
                fullWidth
                onClick={() => router.push("/register")}
              >
                Register
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
