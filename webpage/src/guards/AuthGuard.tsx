'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.replace('/login')
    } else {
      setReady(true)
    }
  }, [])

  if (!ready) return null
  return <>{children}</>
}
