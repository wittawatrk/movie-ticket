import Dashboard from '../../../Modules/admin/dashboard';
import History from '../../../Modules/admin/history';

function historyAdmin() {
  return <History />;
}
historyAdmin.requireAdmin = true;
export default historyAdmin;
