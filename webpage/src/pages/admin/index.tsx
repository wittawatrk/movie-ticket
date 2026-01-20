import Dashboard from '../../Modules/admin/dashboard';

function admin() {
  return <Dashboard />;
}
admin.requireAdmin = true;
export default admin;
