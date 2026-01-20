import { useEffect, useState } from 'react';
import { Reservation } from './model';
import { useSnackbar } from '../../components/snackbar';
import HistoryTable from '../../components/history';
import { getHistory } from '@/services/admin.service';

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
