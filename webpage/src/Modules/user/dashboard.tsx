import { Card, Button, Typography, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import { useEffect, useState } from 'react';
import { Concert } from './model';
import { cancel, getConsertsUser, reserve } from '@/services/user.service';
import { useSnackbar } from '@/components/snackbar';

export default function DashboardUser() {
  const [concertsList, setConcertsList] = useState<any[]>([]);
  const { success, error } = useSnackbar();

  const fetchData = async () => {
    const concertList = await getConsertsUser();
    if (!concertList?.length) return;

    const result = concertList.map((concert: any) => {
      const reservedReservation = concert.reservations.find(
        (r: any) => r.status === 'RESERVED' && r.cancelledAt === null,
      );

      return {
        ...concert,
        reserved: !!reservedReservation,
        reservationId: reservedReservation?.id,
      };
    });
    console.log(result);
    setConcertsList(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAction = async (
    concertId: string,
    reserved: boolean,

  ) => {
    try {
      if (reserved ) {
        await cancel(concertId);
        success('Cancel reservation success');
      } else {
        await reserve(concertId);
        success('Reserve success');
      }

      // refresh list
      await fetchData();
    } catch (err: any) {
      error(err?.message || 'Something went wrong');
    }
  };

  return (
    <div className="space-y-6">
      {concertsList.map((concert) => (
        <ConcertCard
          key={concert.id}
          id={concert.id}
          description={concert.description}
          title={concert.name}
          seats={concert.totalSeats}
          reserved={concert.reserved}
          onAction={handleAction}
        />
      ))}
    </div>
  );
}

function ConcertCard({
  id,
  title,
  seats,
  description,
  reserved = false,
  onAction,
}: {
  id: string;
  title: string;
  seats: number;
  description: string;
  reserved: boolean;
  onAction: (id: string, reserved: boolean) => void;
}) {
  return (
    <Card className="p-4 mb-4">
      <Typography fontWeight={600} fontSize={32} color="#1692EC" sx={{ mb: 2 }}>
        {title}
      </Typography>

      <Divider className="my-6" />

      <Typography fontSize={24}>{description}</Typography>

      <div className="flex justify-between items-center mt-4">
        <Typography fontSize={24}>
          <PeopleIcon fontSize="small" /> {seats}
        </Typography>

        <Button
          variant="contained"
          color={reserved ? 'error' : 'primary'}
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => onAction(id, reserved)}
        >
          {reserved ? 'Cancel' : 'Reserve'}
        </Button>
      </div>
    </Card>
  );
}
