import { VehicleCard } from "@/components/vehicle-card";
import {Vehicle} from "@/lib/types";

const vehicles: Vehicle[] = [
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

export default function DashboardPage() {
    return (
        <div className="p-8 space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2x1 font-bold">Your Vehicles</h1>
            </div>

            <div className="space-y-3">
                {vehicles.map((vehicle) => (
                    <VehicleCard key={vehicle.id} vehicle={vehicle} />
                ))}
            </div>
        </div>
    );
}