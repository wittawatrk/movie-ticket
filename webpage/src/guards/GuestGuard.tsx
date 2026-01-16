'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function GuestGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [allow, setAllow] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
console.log(token);
    if (token) {
      const userRaw = localStorage.getItem('user');
      const user = userRaw ? JSON.parse(userRaw) : null;

      if (user?.role === 'ADMIN') {
        router.replace('/admin');
      } else {
        router.replace('/dashboard');
      }
    } else {
      console.error('Not logged in.');
      setAllow(true); // อนุญาตให้เห็นหน้า login
    }
  }, [router]);

  if (!allow) return null; // หรือ <Loading />

  return <>{children}</>;
}
