'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Role = 'ADMIN' | 'USER'

export function RoleGuard({
                            allow,
                            children,
                          }: {
  allow: Role | Role[]
  children: React.ReactNode
}) {
  const router = useRouter()
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const roles = Array.isArray(allow) ? allow : [allow]

    if (!roles.includes(user.role)) {
      router.replace('/403')
    } else {
      setOk(true)
    }
  }, [])

  if (!ok) return null
  return <>{children}</>
}
