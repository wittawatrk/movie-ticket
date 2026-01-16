export interface Concert {
  id: string;
  name: string;
  description: string;
  totalSeats: number;
  reservedSeats: number;
  createdAt: string; // หรือ Date ถ้าแปลงเป็น Date object
}