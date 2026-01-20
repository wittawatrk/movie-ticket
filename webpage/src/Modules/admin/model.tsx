
export interface Reservation {
  id: string;
  userId: string;
  concertId: string;
  status: "RESERVED" | "CANCELLED";
  createdAt: string;
  cancelledAt: string | null;
  deletedAt: string | null;
  user: User;
  concert: Concert;
}

export interface User {
  id: string;
  displayName: string;
  username: string;
  createdAt: string;
  createdBy: string | null;
  updatedAt: string;
  updatedBy: string | null;
  deletedAt: string | null;
  deletedBy: string | null;
  role: "USER" | "ADMIN";
  isActive: boolean;
}

export interface Concert {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
  deletedAt: string | null;
  createdAt: string;
}
