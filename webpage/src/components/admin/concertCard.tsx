import { deleteConcert } from '@/services/admin.service';
import {
  Button,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import PeopleIcon from '@mui/icons-material/People';
import { useSnackbar } from '../snackbar';

export function ConcertCard({
  id,
  title,
  description,
  seats,
  onDeleted,
}: {
  id: string;
  title: string;
  description: string;
  seats: number;
  onDeleted?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { success, error } = useSnackbar();

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteConcert(id);
      setOpen(false);
      success('delete success');
      onDeleted?.()
    } catch (err: unknown) {
      if (err instanceof Error) {
        error(err.message);
      } else {
        error('Delete failed');
      }
    } finally {
      onDeleted?.()
      setLoading(false);
    }
  };

  return (
    <>
      <Card className="p-4 mb-4">
        <Typography
          fontWeight={600}
          fontSize={32}
          lineHeight="100%"
          letterSpacing={0}
          color="#1692EC"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>

        <Divider color="#C2C2C2" className="my-6" />

        <Typography
          fontWeight={400}
          fontSize={24}
          lineHeight="36px"
          letterSpacing={0}
          color="#000000"
          sx={{ mt: 2 }}
        >
          {description}
        </Typography>

        <div className="flex justify-between items-center">
          <Typography
            fontWeight={400}
            fontSize={24}
            lineHeight="36px"
            letterSpacing={0}
            color="#000000"
            sx={{ mt: 2 }}
          >
            <PeopleIcon fontSize="small" /> {seats}
          </Typography>

          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => setOpen(true)}
          >
            Delete
          </Button>
        </div>
      </Card>


      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>ยืนยันการลบ</DialogTitle>
        <DialogContent>
          <DialogContentText>
            คุณต้องการลบคอนเสิร์ต "{title}" ใช่หรือไม่?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} disabled={loading}>
            ยกเลิก
          </Button>
          <Button
            onClick={handleDelete}
            color="error"
            variant="contained"
            disabled={loading}
          >
            ลบ
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
