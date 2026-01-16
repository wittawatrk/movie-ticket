import { Card, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';
import { getConserts } from '../../services/admin.service';
import { Concert } from './model';
import CreateConcert from './form';

export default function Dashboard() {
  const [tab, setTab] = useState<'overview' | 'create'>('overview');
  const [concertsList, setConcertsList] = useState<Concert[]>([]);
  const [totalSeat, setTotalSeat] = useState<number>(0);
  const [totalReserved, setTotalReserved] = useState<number>(0);
  const [totalCancelled, setTotalCancelled] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const concertList = await getConserts();

      if (!concertList?.length) return;
      setConcertsList(concertList);
      const seatSum = concertsList.reduce((sum, c) => sum + c.totalSeats, 0);
      const reservedSum = concertsList.reduce(
        (sum, c) => sum + c.reservedSeats,
        0,
      );

      // ถ้า cancelled = totalSeats - reservedSeats
      const cancelledSum = concertsList.reduce(
        (sum, c) => sum + (c.totalSeats - c.reservedSeats),
        0,
      );
      setTotalSeat(seatSum);
      setTotalReserved(reservedSum);
      setTotalCancelled(cancelledSum);

      console.log(concertList);
      console.log(concertsList);
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {/* Stat cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total of seats"
          value={totalSeat}
          color="bg-[#0070A4]"
        />
        <StatCard title="Reserve" value={totalReserved} color="bg-[#00A58B]" />
        <StatCard title="Cancel" value={totalCancelled} color="bg-[#E84E4E]" />
      </div>

      {/* Tabs */}
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

      {/* Tab Content */}
      {tab === 'overview' && (
        <>
          {concertsList.map((concert) => (
            <ConcertCard
              key={concert.id}
              title={concert.name}
              seats={concert.totalSeats}
            />
          ))}
        </>
      )}

      {tab === 'create' && <CreateConcert />}
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

function ConcertCard({ title, seats }: { title: string; seats: number }) {
  return (
    <Card className="p-4 mb-4">
      <h3 className="text-blue-600 font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">
        Lorem ipsum dolor sit amet consectetur. Elit purus nam gravida...
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <PeopleIcon fontSize="small" /> {seats}
        </div>
        <Button
          variant="contained"
          color="error"
          size="small"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}
