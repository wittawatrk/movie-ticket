import type { NextPage } from 'next'

export type NextPageWithRole<P = {}, IP = P> = NextPage<P, IP> & {
  requireAdmin?: boolean
  guestOnly?: boolean
}