import { AuthGuard } from '@/guards/AuthGuard';
import Dashboard from '../../Modules/admin/dashboard';
import { RoleGuard } from '@/guards/RoleGuard';

function admin() {
  return <Dashboard />;
}
admin.requireAdmin = true;
export default admin;
