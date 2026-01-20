"use client";

import { Reservation } from "@/Modules/admin/model";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

type Props = {
  data: Reservation[];
};

export default function HistoryTable({ data }: Props) {
  return (
    <div className="p-6">
      <TableContainer component={Paper} className="rounded-xl shadow-md">
        <Table>
          <TableHead className="bg-gray-100">
            <TableRow>
              <TableCell className="font-semibold">Date time</TableCell>
              <TableCell className="font-semibold">Username</TableCell>
              <TableCell className="font-semibold">Concert name</TableCell>
              <TableCell className="font-semibold">Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data.map((row, idx) => {
              const isCancelled = row.status==='CANCELLED';

              return (
                <TableRow key={row.id} className="hover:bg-gray-50">
                  <TableCell>
                    {new Date(row.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell>{row.user.displayName}</TableCell>
                  <TableCell>{row.concert.name}</TableCell>
                  <TableCell>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium
                        ${
                        isCancelled
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
