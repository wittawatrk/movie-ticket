import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Grid
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';

export default function CreateConcert() {
  const [name, setName] = useState('');
  const [totalSeat, setTotalSeat] = useState<number>(0);
  const [description, setDescription] = useState('');

  const onSave = () => {
    const payload = {
      name,
      totalSeats: totalSeat,
      description,
    };
    console.log(payload);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color="primary" mb={2}>
          Create
        </Typography>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Concert Name */}
          <div className="flex-1">
            <TextField
              fullWidth
              label="Concert Name"
              placeholder="Please input concert name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Total Seat */}
          <div className="w-full md:w-[200px]">
            <TextField
              fullWidth
              type="number"
              label="Total of seat"
              value={totalSeat}
              onChange={(e) => setTotalSeat(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Description */}
        <div className="mt-4">
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            placeholder="Please input description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Box display="flex" justifyContent="flex-end" mt={3}>
          <Button
            variant="contained"
            startIcon={<SaveIcon />}
            onClick={onSave}
          >
            Save
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
