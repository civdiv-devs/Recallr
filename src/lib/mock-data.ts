import type {Vehicle} from "@/lib/types";

export const vehicles: Vehicle[] = [
    {
        id: "1",
        vin: "2HGFC2F59KH123456",
        verified: true,
        year: 2019,
        make: "Honda",
        model: "Civic",
        nickname: null,
        status: "no_open_recalls",
        lastChecked: "2026-09-27T06:00:00Z",
    },
    {
        id: "2",
        vin: null,
        verified: false,
        year: 2015,
        make: "Ford",
        model: "F-150",
        nickname: "Work truck",
        status: "open_recall",
        lastChecked: "2026-09-27T06:00:00Z",
    },
    {
        id: "3",
        vin: "2T3P1RFV5MC123456",
        verified: true,
        year: 2021,
        make: "Toyota",
        model: "RAV4",
        nickname: null,
        status: "urgent",
        lastChecked: "2026-09-27T06:00:00Z",
    },
];

export function getVehicle(id: string): Vehicle | undefined {
    return vehicles.find((vehicle) => vehicle.id === id);
}