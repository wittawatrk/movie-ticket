import { Card, Button, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';
import { createConcert, getConserts } from '../../services/admin.service';
import { Concert } from './model';
import CreateConcert from './form';
import { useSnackbar } from '../../components/snackbar';
import { ConcertCard } from '@/components/admin/concertCard';

export default function Dashboard() {
  const [tab, setTab] = useState<'overview' | 'create'>('overview');
  const [concertsList, setConcertsList] = useState<Concert[]>([]);
  const [totalSeat, setTotalSeat] = useState<number>(0);
  const [totalReserved, setTotalReserved] = useState<number>(0);
  const [totalCancelled, setTotalCancelled] = useState<number>(0);
  const { success, error } = useSnackbar();
  const fetchData = async () => {
    const concertList: Concert[] = await getConserts();
    if (!concertList?.length) return;

    setConcertsList(concertList);

    const seatSum = concertList.reduce((sum, c) => sum + c.totalSeats, 0);
    const reservedSum = concertList.reduce(
      (sum, c) => sum + c.reservedSeats,
      0,
    );
    const cancelledSum = concertList.reduce(
      (sum, c) => sum + (c.totalSeats - c.reservedSeats),
      0,
    );

    setTotalSeat(seatSum);
    setTotalReserved(reservedSum);
    setTotalCancelled(cancelledSum);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total of seats"
          value={totalSeat}
          color="bg-[#0070A4]"
        />
        <StatCard title="Reserve" value={totalReserved} color="bg-[#00A58B]" />
        <StatCard title="Cancel" value={totalCancelled} color="bg-[#E84E4E]" />
      </div>


      <div className="flex gap-6 text-sm border-b">
        <button
          onClick={() => setTab('overview')}
          className={`pb-2 ${
            tab === 'overview'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400'
          }`}
        >
          Overview
        </button>

        <button
          onClick={() => setTab('create')}
          className={`pb-2 ${
            tab === 'create'
              ? 'text-blue-600 border-b-2 border-blue-600'
              : 'text-gray-400'
          }`}
        >
          Create
        </button>
      </div>


      {tab === 'overview' && (
        <>
          {concertsList.map((concert) => (
            <ConcertCard
              id={concert.id}
              title={concert.name}
              seats={concert.totalSeats}
              description={concert.description}
              onDeleted={fetchData}
            />
          ))}
        </>
      )}

      {tab === 'create' && <CreateConcert onCreated={fetchData} />}
    </div>
  );
}

function StatCard({
  title,
  value,
  color,
}: {
  title: string;
  value: number;
  color: string;
}) {
  return (
    <div className={`${color} text-white rounded-lg p-4`}>
      <p className="text-sm">{title}</p>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
