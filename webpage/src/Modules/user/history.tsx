import { useEffect, useState } from 'react';
import { useSnackbar } from '../../components/snackbar';
import HistoryTable from '../../components/history';
import { getHistory } from '@/services/user.service';
import { Reservation } from '../admin/model';

export default function History() {
  const [reservationsList, setReservations] = useState<Reservation[]>([]);

  const fetchData = async () => {
    const history: Reservation[] = await getHistory();

    setReservations(history);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      <HistoryTable data={reservationsList} />
    </div>
  );
}
