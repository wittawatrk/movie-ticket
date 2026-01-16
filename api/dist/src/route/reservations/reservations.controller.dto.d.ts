export declare class ReserveSeatDto {
    concertId: string;
}
export declare class CancelReservationDto {
    reservationId: string;
}
export declare enum ReservationStatus {
    RESERVED = "RESERVED",
    CANCELLED = "CANCELLED"
}
export declare class ReservationResponseDto {
    id: string;
    userId: string;
    concertId: string;
    status: ReservationStatus;
    createdAt: Date;
    cancelledAt?: Date;
}
export declare class ReservationWithConcertDto {
    id: string;
    status: ReservationStatus;
    createdAt: Date;
    cancelledAt?: Date;
    concert: {
        id: string;
        name: string;
        description: string;
        totalSeats: number;
        reservedSeats: number;
    };
}
