import { AuthGuard } from '../../guards/AuthGuard';
import { RoleGuard } from '../../guards/RoleGuard';
import GuestGuard from '../../guards/GuestGuard';
import Sidebar from './sidebar';

export default function GlobalLayout({
  children,
  requireAdmin = false,
  guestOnly = false,
}: {
  children: React.ReactNode;
  requireAdmin?: boolean;
  guestOnly?: boolean;
}) {
  const content = (
    <div className="flex min-h-screen bg-gray-100">
      {!guestOnly && <Sidebar />}
      <main
        className={`flex-1 p-4 md:p-6 ${!guestOnly ? 'md:ml-[240px]' : ''}`}
      >
        {children}
      </main>
    </div>
  );

  if (guestOnly) {
    return <GuestGuard>{children}</GuestGuard>;
  }

  if (requireAdmin) {
    return (
      <AuthGuard>
        <RoleGuard allow="ADMIN">{content}</RoleGuard>
      </AuthGuard>
    );
  }

  return <AuthGuard>{content}</AuthGuard>;
}
